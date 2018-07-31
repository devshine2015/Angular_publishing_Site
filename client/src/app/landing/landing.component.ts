import { Component, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Request, Headers, Response } from "@angular/http";
import { MdDialog, MdDialogRef } from '@angular/material';
import { DataService } from '../dataService';
import { AppConfig } from "../app.config";

declare let color;
declare let d3;
declare let force;
declare global {
  interface Window {
    d3: any;
    svg: any;
    force: any;
    cluster: any;
    grouping: any;

    collide: any;
    circle: any;
    nodes: any;
    articles: any;
    text: any;
    text1: any;
    article: any;
  }
}

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent {
  @ViewChild('upload') inputFile: ElementRef;
  title = 'Landing Page';

  width = 2103;
  height = 917;

  padding = 30; // separation between same-color nodes
  clusterPadding = 80; // separation between different-color nodes
  maxRadius = 22;
  groupPadding = 50;
  csvUrl: string;

  force: any;
  svg: any;
  circle: any = [];
  text: any;
  articles: any = [];
  article_html: string = '<img src="https://developer.yodlee.com/sites/default/files/yodlee-logo.png" class="article-img">\
                  <div class="article-desc">\
                    <span>\
                      The idea is that you can pick the features you want and slot in the code.\
                    </span>\
                  </div>\
                  <div class="social-btn">\
                    <span class="btn1"><i class="material-icons">bookmark</i></span>\
                    <span class="btn2"><i class="fa fa-twitter"></i></span>\
                    <span class="btn4"><i class="material-icons">add_circle_outline</i></span>\
                    <span class="btn3"><i class="material-icons">keyboard_arrow_right</i></span>\
                  </div>';
  jsonArr: any; // Define the main array of articles and ellipses
  mainArray: any;
  m = 2; // number of distinct clusters
  n = 16; // total number of circles
  clusters: any;
  groups: any;
  nodes: any;
  maxView = 5;

  selectedOption: string;

  constructor(private router: Router, private data: DataService, private http: Http, private dialog: MdDialog, private url: AppConfig) {
    this.http.get(this.url.apiUrl + '/data/group')
      .then(
        res => {
          this.jsonArr = res.json();
          that.visualization();
        }
      )
      .catch(
        err => console.log(err)
      );
  }

  visualization() {
    this.n = this.jsonArr.length;
    this.m = this.jsonArr.filter(data => data.type == 1).length;
    let that = this;
    this.clusters = new Array(this.m); // number of distinct clusters
    this.groups = new Array(this.n); // total number of circles
    for(var i = 0; i < this.m; i++) {
      var article = d3.select("#cluster-force-directed").append("div")
                          .attr("class", "article")
                          .html(this.article_html);
      this.articles.push(article);
    }
    this.nodes = d3.range(that.n).map(index => {
      var d = this.jsonArr[index];
      if(that.jsonArr[index].type == "1")
        this.clusters[that.jsonArr[index].cluster] = d;
      if(that.jsonArr[index].type == "3")
        this.groups[that.jsonArr[index].group] = d;
      return d;
    });

    // Define the D3's force layout
    window.force = d3.layout.force()
      .nodes(this.nodes)
      .size([this.width, this.height])
      .gravity(0)
      .charge(0)
      .on("tick", this.tick)
      .start()

    // Insert SVG and g tag into the div element and initializing the svg
    window.svg = d3.select("#cluster-force-directed")
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)

    // Ellipse Tags to be inserted
    window.circle = window.svg.selectAll('nodes')
      .data(this.nodes)
      .enter()
      .append("circle")
      .attr("r", d => d.radius)
      .style("fill", d => this.data.getColor()[d.data.groupType] || "white")
      .on("dblclick", d => {
        that.data.name = d.name;
        that.openDialog();
      })
      .call(window.force.drag)

    // Inserting the text tags
    window.text = window.svg.selectAll('nodes')
      .data(this.nodes)
      .enter()
      .append("text")
      .text(d => {
        var text = d.data.nodeName + ":" + d.data.desc;
        var para = text.substr(0, 60);
        return para;
      })
      .style("text-anchor", "middle")
      .style("fill", "#555")
      .style("font-family", "")
      .style("font-size", 12)

    // Inserting the second text tags
    window.text1 = window.svg.selectAll('nodes')
      .data(this.nodes)
      .enter()
      .append("text")
      .text(d => {
        var text = d.data.nodeName + ":" + d.data.desc;
        var para = text.substr(60, 60);
        return para;
      })
      .style("text-anchor", "middle")
      .style("fill", "#555")
      .style("font-family", "")
      .style("font-size", 12)

    // Move d to be adjacent to the cluster node.
    window.cluster = (alpha) => {
      var that = this;
      return function(d) {
        var cl = that.clusters[d.cluster];
        var cluster = cl;
        var k = 1;
        var maxView = that.maxView;
        var width = that.width, height = that.height;
        // For cluster nodes, apply custom gravity.
        if (cl === d) {
          if(cl.cluster % maxView == 0)
            cluster = {x: width * 1/4, y: height/2, radius: -d.radius};
          else if(cl.cluster % maxView == 1)
            cluster = {x: width * 3/4, y: height/2, radius: -d.radius};
          else if(cl.cluster % maxView == 2)
            cluster = {x: width/6, y: 3 * height/4, radius: -d.radius};
          else if(cl.cluster % maxView == 3)
            cluster = {x: width/2, y: 3 * height/4, radius: -d.radius};
          else if(cl.cluster % maxView == 4)
            cluster = {x:width * 5/6, y: height * 3/4, radius: -d.radius};
          k = .1 * Math.sqrt(d.radius);
        }
        k = alpha;
        var x = d.x - cluster.x,
            y = d.y - cluster.y,
            l = Math.sqrt(x * x + y * y),
            r = d.radius + cluster.radius;
        if (l != r) {
          l = (l - r) / l * alpha * k;
          d.x -= x *= l;
          d.y -= y *= l;
          that.articles[d.cluster].style("left", (cluster.x - 95 + "px"));
          that.articles[d.cluster].style("top", (cluster.y + 40 + "px"));
        }
      };
    }

    window.grouping = (alpha) => {
      var that = this;
      return function(d) {
        var gp = that.groups[d.group];
        var group = gp;
        if (!group) return;
        var k = 1;
        // For cluster nodes, apply custom gravity.
        var maxView = that.maxView;
        var width = that.width, height = that.height;
        if (gp === d) { // w: 2103 h: 97
          if(gp.cluster % maxView == 0)
            group = {x: width/3, y: height/4, radius: -d.radius};
          else if(gp.cluster % maxView == 1)
            group = {x: width * 2/3, y: height/4, radius: -d.radius};
          else if(gp.cluster % maxView == 2)
            group = {x: width/6, y: 3 * height/4, radius: -d.radius};
          else if(gp.cluster % maxView == 3)
            group = {x: width/2, y: 3 * height/4, radius: -d.radius};
          else if(gp.cluster % maxView == 4)
            group = {x:width * 5/6, y: height * 3/4, radius: -d.radius};
          k = .1 * Math.sqrt(d.radius);
        }
        k = alpha;
        var x = d.x - group.x,
            y = d.y - group.y,
            l = Math.sqrt(x * x + y * y),
            r = d.radius + group.radius;
        if (l != r) {
          l = (l - r) / l * alpha * k;
          d.x -= x *= l;
          d.y -= y *= l;
        }
      };
    }

    // Resolves collisions between d and all other circles.
    window.collide = (alpha) => {
      var quadtree = d3.geom.quadtree(this.nodes);
      var that = this;
      return function(d) {
        var r = d.radius + this.maxRadius + Math.max(that.padding, that.clusterPadding),
            nx1 = d.x - r,
            nx2 = d.x + r,
            ny1 = d.y - r,
            ny2 = d.y + r;
        quadtree.visit(function(quad, x1, y1, x2, y2) {
          if (quad.point && (quad.point !== d)) {
            var x = d.x - quad.point.x,
                y = d.y - quad.point.y,
                l = Math.sqrt(x * x + y * y),
                r = d.radius + quad.point.radius + (d.group === quad.point.group ? that.padding : that.groupPadding);
            if (l < r) {
              l = (l - r) / l * alpha;
              d.x -= x *= l;
              d.y -= y *= l;
              quad.point.x += x;
              quad.point.y += y;
            }
          }
          return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
        });
      };
    }
  }



  tick(e) {
    window.circle
      .each(window.cluster(10 * e.alpha * e.alpha))
      .each(window.grouping(10 * e.alpha * e.alpha))
      .each(window.collide(.5))
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
    window.text
      .attr("dx", function (d) { return d.x; })
      .attr("dy", function (d) { return d.y; });
    window.text1
      .attr("dx", function (d) { return d.x; })
      .attr("dy", function (d) { return d.y + 10; });
  }

  openDialog() {
    let dialogRef = this.dialog.open(Dialog, {
      height: '200px',
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  redirect(redirectLink) {
    this.router.navigateByUrl(redirectLink);
  }

  uploadCSV(event) {
    console.log("upload Event: ", event);
    let inputFile: HTMLInputElement = this.inputFile.nativeElement;
    let fileCount: number = inputFile.files.length;
    let formData = new FormData();
    let filename = inputFile.files[0].name;
    this.csvUrl = URL.createObjectURL(event.target.files[0]);
    this.readCsvData();
  }

  readCsvData() {
    if (this.csvUrl) this.http.get(this.csvUrl)
      .subscribe(
      data => this.extractData(data),
      err => this.handleError(err)
      );
  }

  private extractData(res: Response) {
    let csvData = res['_body'] || '';
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');
    let lines = [];
    for (let i = 0; i < 171; i++) {
      // split content based on comma
      let data = allTextLines[i].split(',');
      if (data.length == headers.length) {
        let tarr = [];
        for (let j = 0; j < headers.length; j++) {
          if (data[j] !== "") {
            let array = data[j].split(";");
            let json = {
              groupType: 'g13',
              nodeName: array[0],
              desc: array[1],
              state: array[2]
            }
            lines.push(json);
          }
        }
        // lines.push(tarr);
      }
    }
    console.log("Lines", lines);
    this.http.post(this.url.apiUrl + '/data/upload', lines)
      .subscribe(
      res => {
        console.log("upload result is", res);
      }
      )
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return errMsg;
  }
}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './article.component.html',
})
export class Dialog {

  public name;

  constructor(public dialogRef: MdDialogRef<Dialog>, private service: DataService) {
    this.dialogRef.updateSize('300', '300');
    this.name = this.service.name;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
