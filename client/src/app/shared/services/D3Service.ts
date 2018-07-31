import * as d3 from "d3/index";
import * as _ from "lodash";
import { DataService } from '../../shared/services/dataService';
import { D3ContextMenu } from '../components/D3/contextMenu.component';

export class D3Service {
  width: number = 1503;
  height:number = 917;
  paddings: any = { node: 20, cluster: 100, text: 5};

  svgSelector: string;

  nodes: any = [];
  simulation: any;
  svgElements: any = { 
  	ellipses: null, 		textsEllipse: null,
  	articles: null, 	textsArticle: null, tspansArticle1: null, tspansArticle2: null, imgsArticle: null, twitterLinksArticle: null, bookmarkLinksArticle: null, detailLinksArticle: null, editLinksArticle: null,
  	rects: null, 			textsRect: null,
  	texts: null,
  	links: null
  };
  svg: any;
  svgContainer: any;
  transform: any = { k: 1, x: 0, y: 0};

  listeners: any = {
  	click: null,
  	dblclick: null
  };
  // used to cancel click event if double click
  handleClickListener: any = null;

  contextMenu: any;
	
	constructor() {
  }

  init(svgSelector: string) {
  	this.svgSelector = svgSelector;
    this.svgContainer = d3.select(this.svgSelector)
      .append('svg')
      .call(d3.zoom().on("zoom", () => {
        this.transform = {
          k: d3.event.transform.k,
          x: d3.event.transform.x,
          y: d3.event.transform.y
        };
        this.svg.attr("transform", 'translate(' + (this.transform.x + this.width/2) + ',' + (this.transform.y + this.height/2) + ') scale(' + this.transform.k + ')');
      }))
      .on("dblclick.zoom", null);

    // define filters
    var defs = this.svgContainer.append("defs");
    var filter = defs.append("filter")
      .attr("id", "drop-shadow")
      .attr("height", "130%");
    filter.append("feGaussianBlur")
      .attr("in", "SourceAlpha")
      .attr("stdDeviation", 3)
      .attr("result", "blur");
    filter.append("feOffset")
      .attr("in", "blur")
      .attr("dx", 2)
      .attr("dy", 2)
      .attr("result", "offsetBlur");
    var feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode")
      .attr("in", "offsetBlur")
    feMerge.append("feMergeNode")
      .attr("in", "SourceGraphic");

    this.svg = this.svgContainer.append('g');



    this.simulation = d3.forceSimulation()
      .velocityDecay(0.1)
      .force("x", d3.forceX().strength(.0005))
      .force("y", d3.forceY().strength(.0005))
      .force("charge", d3.forceManyBody())
      .force("collide", (alpha) => this.collide(alpha))
      .force("cluster", (alpha) => this.clustering(alpha));


    this.contextMenu = new D3ContextMenu(this.svg, [{id: 'AGREE_DISAGREE', label: 'Agree/Disagree'}, {id: 'DRILL_DOWN', label: 'Drill down'}]);
    this.contextMenu.on('AGREE_DISAGREE', { context: this, func: (d) => {
      this.listeners.agreedisagree.func.call(this.listeners.agreedisagree.context, d);
    }});
    this.contextMenu.on('DRILL_DOWN', { context: this, func: (d) => {
      this.listeners.drilldown.func.call(this.listeners.drilldown.context, d);
    }})
  }

  resize(size: any) {
    this.width = size.width;
    this.height = size.height;

    this.svgContainer
      .style('width', size.width)
      .style('height', size.height);
    this.svg
      .attr("transform", 'translate(' + (this.transform.x + this.width/2) + ',' + (this.transform.y + this.height/2) + ') scale(' + this.transform.k + ')');
  }

  start(nodes) {
  	this.nodes = nodes;

  	this.svg.selectAll('*').remove();

  	this.initNodes();

  	this.visualize();
  }

  initNodes() {
  }


  reskinNodes(nodes) {
    let that = this;

    _.each(nodes, (d:any) => {
      let node = _.find(this.nodes, (n:any) => n.nodeData.nodeIndex == d.nodeData.nodeIndex);
      node.style = d.style;
    });

    this.svgElements.links
        .style("stroke-width", (d:any) => d.nodeData.link.width + 'px')
        .style("stroke", (d:any) => d.nodeData.link.color);

    this.svgElements.articles
        .attr('width', (d:any) => d.style.width)
        .attr('height', (d:any) => d.style.height)
        .style('stroke', '#000')
        .style('stroke-width', 2)
        .style("fill", (d:any) => d.style.color);

    this.svgElements.imgsArticle
        .attr('width', (d:any) => d.style.height)
        .attr('height', (d:any) => d.style.height);

    this.svgElements.ellipses
      .style("fill", (d:any) => d.style.color);

    this.svgElements.textsEllipse
      .attr('font-size', (d:any) => d.style.font)
      .each( function(d:any) { let bb = this.getBBox(); d.style.width = bb.width + that.paddings.text * 2; d.style.height = bb.height * 2 + that.paddings.text * 2; });

    this.svgElements.rects
      .attr('width', (d:any) => d.style.width)
      .attr('height', (d:any) => d.style.height)
      .style("fill", (d:any) => d.style.color);

    this.svgElements.textsRect
      .attr('font-size', (d:any) => d.style.font)
      .each( function(d:any) { let bb = this.getBBox(); d.style.width = bb.width + that.paddings.text; d.style.height = bb.height + that.paddings.text });
  }


  visualize() {
    let that = this;

    this.simulation.nodes(this.nodes)
      .force("link", d3
        .forceLink().id(function(d:any) { return d._id; })
        .distance(100)
        .strength(1)
      )
      .on("tick", () => this.ticked());

    this.svgElements.links = this.svg
    	.datum(this.nodes.filter((d:any) => d.nodeData.link != null))
    	.selectAll('.link')
    	.data((d:any) => d)
    	.enter().append('line');

    this.svgElements.articles = this.svg.append('g')
        .datum(this.nodes.filter(d=> d.shape == 'article'))
        .selectAll('.rect')
        .data((d:any) => { return d; })
        .enter().append('rect')
        .attr('id', (d:any) => 'article' + d.nodeData.nodeIndex)
        .attr('data-index', (d:any) => d.nodeData.nodeIndex)
        .attr('data-id', (d:any) => d._id);
    this.svgElements.imgsArticle = this.svg.append('g')
        .datum(this.nodes.filter(d=> d.shape == 'article'))
        .selectAll('.image')
        .data((d:any) => { return d; })
        .enter().append('image')
        .attr('xlink:href', (d:any) => d.imageLink)
        .attr('id', (d:any) => 'articleImg' + d.nodeData.nodeIndex)
        .attr('data-index', (d:any) => d.nodeData.nodeIndex)
        .attr('data-id', (d:any) => d._id);
    this.svgElements.textsArticle = this.svg.append('g')
        .datum(this.nodes.filter(d=> d.shape == 'article'))
        .selectAll('.text')
        .data((d:any) => { return d; })
        .enter().append('text')
        .attr('font-size', (d:any) => 15)
        .attr("dominant-baseline", "central")
        .attr('id', (d:any) => 'articleText' + d.nodeData.nodeIndex)
        .attr('data-index', (d:any) => d.nodeData.nodeIndex)
        .attr('data-id', (d:any) => d._id);
    let charsToWrap = 30;
    this.svgElements.tspansArticle1 = this.svgElements.textsArticle
          .append('tspan')
          .attr('x', 0)
          .attr('dy', 15)
          .text((d:any) => d.body.substring(0,charsToWrap))
          .attr('data-index', (d:any) => d.nodeData.nodeIndex);
    this.svgElements.tspansArticle2 = this.svgElements.textsArticle
          .append('tspan')
          .attr('x', 0)
          .attr('dy', 30)
          .text((d:any) => _.truncate(d.body.substring(charsToWrap), {'length': charsToWrap}))
          .attr('data-index', (d:any) => d.nodeData.nodeIndex);
    this.svgElements.twitterLinksArticle = this.svg.append('g')
        .datum(this.nodes.filter(d=> d.shape == 'article'))
        .selectAll('.link')
        .data((d:any) => { return d; })
        .enter().append('g')
        .attr('class', 'pointer')
        .append('text')
        .style("font-family", "FontAwesome")
        .attr('font-size', (d:any) => 25)
        .attr('id', (d:any) => 'articleTwitterButton' + d.nodeData.nodeIndex)
        .attr('data-index', (d:any) => d.nodeData.nodeIndex)
        .attr('data-id', (d:any) => d._id)
        .html('&#xf099;');
    this.svgElements.bookmarkLinksArticle = this.svg.append('g')
        .datum(this.nodes.filter(d=> d.shape == 'article'))
        .selectAll('.link')
        .data((d:any) => { return d; })
        .enter().append('g')
        .attr('class', 'pointer')
        .append('text')
        .style("font-family", "FontAwesome")
        .attr('font-size', (d:any) => 25)
        .attr('id', (d:any) => 'articleBookmarkButton' + d.nodeData.nodeIndex)
        .attr('data-index', (d:any) => d.nodeData.nodeIndex)
        .attr('data-id', (d:any) => d._id)
        .html('&#xf02e;');
    this.svgElements.detailLinksArticle = this.svg.append('g')
        .datum(this.nodes.filter(d=> d.shape == 'article'))
        .selectAll('.link')
        .data((d:any) => { return d; })
        .enter().append('g')
        .attr('class', 'pointer')
        .append('text')
        .style("font-family", "FontAwesome")
        .attr('font-size', (d:any) => 25)
        .attr('id', (d:any) => 'articleDetailButton' + d.nodeData.nodeIndex)
        .attr('data-index', (d:any) => d.nodeData.nodeIndex)
        .attr('data-id', (d:any) => d._id)
        .html('&#xf138;');
    this.svgElements.editLinksArticle = this.svg.append('g')
        .datum(this.nodes.filter(d=> d.shape == 'article'))
        .selectAll('.link')
        .data((d:any) => { return d; })
        .enter().append('g')
        .attr('class', 'pointer')
        .append('text')
        .style("font-family", "FontAwesome")
        .attr('font-size', (d:any) => 25)
        .attr('id', (d:any) => 'articleEditButton' + d.nodeData.nodeIndex)
        .attr('data-index', (d:any) => d.nodeData.nodeIndex)
        .attr('data-id', (d:any) => d._id)
        .html('&#xf055;');


    this.svgElements.ellipses = this.svg.append('g')
      .datum(this.nodes.filter(d=> d.shape == 'ellipse'))
      .selectAll('.ellipse')
      .data((d:any) => { return d; })
      .enter().append('ellipse')
        .attr('id', (d:any) => 'ellipse' + d.nodeData.nodeIndex)
      .attr('data-index', (d:any) => d.nodeData.nodeIndex)
      .attr('data-id', (d:any) => d._id)
      .attr('class', (d:any) => 'pointer g ellipse ' + d.nodeData.g);
    this.svgElements.textsEllipse = this.svg.append('g')
      .datum(this.nodes.filter(d=> d.shape == 'ellipse'))
      .selectAll('.text')
      .data((d:any) => { return d; })
      .enter().append('text')
        .attr('id', (d:any) => 'ellipseText' + d.nodeData.nodeIndex)
      .attr('data-index', (d:any) => d.nodeData.nodeIndex)
      .attr('data-id', (d:any) => d._id)
      .attr('class', (d:any) => 'pointer g text ' + d.nodeData.g)
    	.attr("text-anchor", "middle")
    	.attr("dominant-baseline", "central")
      .text((d:any) => d.nodeData.text);

    this.svgElements.rects = this.svg.append('g')
      .datum(this.nodes.filter(d=> d.shape == 'rect'))
      .selectAll('.rect')
      .data((d:any) => { return d; })
      .enter().append('rect')
        .attr('id', (d:any) => 'rect' + d.nodeData.nodeIndex)
      .attr('data-index', (d:any) => d.nodeData.nodeIndex)
      .attr('data-id', (d:any) => d._id)
      .attr('class', (d:any) => 'pointer g rect ' + d.nodeData.g);

    this.svgElements.textsRect = this.svg.append('g')
      .datum(this.nodes.filter(d=> d.shape == 'rect'))
      .selectAll('.text')
      .data((d:any) => { return d; })
      .enter().append('text')
        .attr('id', (d:any) => 'rectText' + d.nodeData.nodeIndex)
      .attr('data-index', (d:any) => d.nodeData.nodeIndex)
      .attr('data-id', (d:any) => d._id)
      .attr('class', (d:any) => 'pointer g text ' + d.nodeData.g)
      .attr("text-anchor", (d) => d.nodeData.g == 'g5' ? "left" : "middle") // comment = g5: left aligned
      .attr("dominant-baseline", (d) => d.nodeData.g == 'g5' ? "text-before-edge" : "central")
      .attr('font-size', (d:any) => d.style.font)
      .each( function(d) {
        charsToWrap = 60;
        let totalW = 0;
        for(var i=0; i<d.nodeData.text.length; i+=charsToWrap) {
          let tspan:any = d3.select(this).append('tspan')
          .attr('dx', -1 * totalW)
          .attr('dy', i == 0 ? 0 : 15)
          .text((d:any) => d.nodeData.text.substr(i,charsToWrap))
          .attr('data-index', (d:any) => d.nodeData.nodeIndex)
          .node();
          totalW = tspan.getComputedTextLength();
        }
      });

    this.reskinNodes(this.nodes);

    _.each(this.svgElements, (elements: any, elType: string) => {
    	if(elements == null || elType == 'links') return;
    	elements
	      .on("dblclick", (d:any) => {
	      	if(this.listeners.dblclick) {
	      		if(this.handleClickListener) {
	      			this.handleClickListener = null;
	      			window.clearTimeout(this.handleClickListener);
	      		}
	      		this.listeners.dblclick.func.call(this.listeners.dblclick.context, d, elType);
	      	}
	      })
	      .on("click", (d:any) => {
	      	if(this.listeners.click) {
	      		this.handleClickListener = window.setTimeout(() => { 
	      			if(that.handleClickListener) {
	      				this.listeners.click.func.call(this.listeners.click.context, d, elType);
		      			that.handleClickListener = null;
		      		}
	      		}, 300);
	      	}
	      })
        .on('contextmenu', function(d:any){ 
            d3.event.preventDefault();
            that.contextMenu.pop(d3.mouse(this)[0], d3.mouse(this)[1], d);
        });

      if(elType == 'rects' || elType == 'ellipses') {
        elements.on('mouseenter', function(d:any) {
          if(that.dropShowable(d)) {
            this.style.filter="url('#drop-shadow')";
            d3.select('#rectText' + d.nodeData.nodeIndex).style('font-weight', "bold");
            d3.select('#ellipseText' + d.nodeData.nodeIndex).style('font-weight', "bold");
          }
        })
        .on('mouseleave', function(d:any) {
          if(that.dropShowable(d)) {
            this.style.filter="none";
            d3.select('#rectText' + d.nodeData.nodeIndex).style('font-weight', "normal");
            d3.select('#ellipseText' + d.nodeData.nodeIndex).style('font-weight', "normal");
          }
        });
      }
      else if(elType == 'textsRect' || elType == 'textsEllipse') {
        elements.on('mouseenter', function(d:any) {
          if(that.dropShowable(d)) {
            d3.select('#rect' + d.nodeData.nodeIndex).style('filter', "url('#drop-shadow')");
            d3.select('#ellipse' + d.nodeData.nodeIndex).style('filter', "url('#drop-shadow')");
            this.style.fontWeight = 'bold';
          }
        })
        .on('mouseleave', function(d:any) {
          if(that.dropShowable(d)) {
            d3.select('#rect' + d.nodeData.nodeIndex).style('filter', "none");
            d3.select('#ellipse' + d.nodeData.nodeIndex).style('filter', "none");
            this.style.fontWeight = 'normal';
          }
        });
      }
		});
    _.each(this.svgElements, (elements: any) => {
    	if(elements == null) return;
    	elements.call(d3.drag()
	      .on("start", function(d:any) {
          d3.event.sourceEvent.stopPropagation();
	      	if(!d.nodeData.movable) return;
          if (!d3.event.active) that.simulation.alphaTarget(0.3).restart();
        })
        .on("drag", function(d:any) {
        	if(!d.nodeData.movable) return;
            d3.select(this).attr("x", d.x = d3.event.x).attr("y", d.y = d3.event.y);
        })
        .on("end", function (d:any) {
        	if(!d.nodeData.movable) return;
          if (!d3.event.active) that.simulation.alphaTarget(0);
        })
			);
    });

    this.simulation.restart();
    this.simulation.alpha(1);
  }

  dropShowable(d:any) {
    return d.nodeData.g == 'g1' || d.nodeData.g == 'g2' ||  d.nodeData.g == 'g3' ||  d.nodeData.g == 'g4' ||  d.nodeData.g == 'g6' ||  d.nodeData.g == 'g7' ||  d.nodeData.g == 'g11' ||  d.nodeData.g == 'g12' ||  d.nodeData.g == 'g13' ||  d.nodeData.g == 'g21' ||  d.nodeData.g == 'g22';
  }
  on(event, listener, context = null) {
  	this.listeners[event] = { context: context, func: listener};
  }


  ticked () {
    this.svgElements.links
    			.attr('x1', (d:any) => d.x + d.style.width/2 )
    			.attr('y1', (d:any) => d.y + d.style.height/2 )
    			.attr('x2', (d:any) => { let p=this.parentOfElement(d); return p.x + p.style.width /2; })
    			.attr('y2', (d:any) => { let p=this.parentOfElement(d); return p.y + p.style.height /2; });
    this.svgElements.articles
          .attr('x', (d:any) => d.x)
          .attr('y', (d:any) => d.y);
    this.svgElements.imgsArticle
          .attr('x', (d:any) => d.x)
          .attr('y', (d:any) => d.y);
    this.svgElements.textsArticle
          .attr('x', (d:any) => d.x)
          .attr('y', (d:any) => d.y);
    this.svgElements.tspansArticle1
          .attr('x', (d:any) => d.x + 110)
          .attr('y', (d:any) => d.y);
    this.svgElements.tspansArticle2
          .attr('x', (d:any) => d.x + 110)
          .attr('y', (d:any) => d.y);
    let bottomPadding = 10, 
        leftPadding = 10,
        rightPadding = 40,
        eachPadding = 30,
        articleImageWidth = 100;
    this.svgElements.bookmarkLinksArticle
          .attr('x', (d:any) => d.x + articleImageWidth + leftPadding)
          .attr('y', (d:any) => d.y + d.style.height - bottomPadding);
    this.svgElements.twitterLinksArticle
          .attr('x', (d:any) => d.x + articleImageWidth + leftPadding + eachPadding)
          .attr('y', (d:any) => d.y + d.style.height - bottomPadding);
    this.svgElements.detailLinksArticle
          .attr('x', (d:any) => d.x + d.style.width - rightPadding - eachPadding)
          .attr('y', (d:any) => d.y + d.style.height - bottomPadding);
    this.svgElements.editLinksArticle
          .attr('x', (d:any) => d.x + d.style.width - rightPadding)
          .attr('y', (d:any) => d.y + d.style.height - bottomPadding);


    this.svgElements.ellipses
    			.attr('rx', (d:any) => d.style.width/2)
          .attr('ry', (d:any) => d.style.height/2)
          .attr('cx', (d:any) => d.x + d.style.width/2)
          .attr('cy', (d:any) => d.y + d.style.height/2);
    this.svgElements.textsEllipse
          .attr('x', (d:any) => d.x + d.style.width/2 )
          .attr('y', (d:any) => d.y + d.style.height/2 );
    this.svgElements.rects
    			.attr('width', (d:any) => d.style.width)
    			.attr('height', (d:any) => d.style.height)
          .attr('x', (d:any) => d.x)
          .attr('y', (d:any) => d.y);
    this.svgElements.textsRect
          .attr('x', (d:any) => d.x + (d.nodeData.g == 'g5' ? 0 : d.style.width/2) )    //g5 : comment left aligned
          .attr('y', (d:any) => d.y + (d.nodeData.g == 'g5' ? 0 : d.style.height/2) );
  }

  clustering(alpha) {
    this.nodes.forEach((d:any) => {
      let parent = this.parentOfElement(d);
      if (parent == null) return;
      let padding = (parent._id != d.nodeData.article_id && d.nodeData.parentIndex != parent.nodeData.nodeIndex && d.nodeData.nodeIndex != parent.nodeData.parentIndex && d.nodeData.parentIndex != parent.nodeData.parentIndex ? this.paddings.cluster : 0) + this.paddings.node;

      if(parent === d) {
        // parent = {
        //   x: 0,     y: 0,
        //   style : {
        //     width: 0, height: 2
        //   }
        // }
        return;
      }

      let x = (d.x + d.style.width/2) - (parent.x + parent.style.width/2),
          y = (d.y + d.style.height/2) - (parent.y + parent.style.height/2),
          xSpacing = (parent.style.width + d.style.width) / 2 + 0,
          ySpacing = (parent.style.height + d.style.height) / 2 + 0,
          absX = Math.abs(x),
          absY = Math.abs(y),
          l, lx, ly;

      if (absX > xSpacing || absY > ySpacing) {
        l = Math.sqrt(x * x + y * y);

        lx = (absX - xSpacing) / l * alpha;
        ly = (absY - ySpacing) / l * alpha;

        d.x -= x *= lx;
        d.y -= y *= ly;
        parent.x += x;
        parent.y += y;
      }
    });
  }
  collide(alpha) {
    // let that = this;
    var quadtree = d3.quadtree()
        .x((d: any) => d.x)
        .y((d: any) => d.y)
        .addAll(this.nodes);

    this.nodes.forEach((d:any) => {
      quadtree.visit((quad: any, x0, y0, x1, y1) => {
        let updated = false;

        if (quad.data && (quad.data !== d)) {
          let padding = (quad.data.nodeData.article_id != d._id && quad.data._id != d.nodeData.article_id && d.nodeData.parentIndex != quad.data.nodeData.nodeIndex && d.nodeData.nodeIndex != quad.data.nodeData.parentIndex && d.nodeData.parentIndex != quad.data.nodeData.parentIndex ? this.paddings.cluster : 0) + this.paddings.node;

          let x = (d.x + d.style.width/2) - (quad.data.x + quad.data.style.width/2),
              y = (d.y + d.style.height/2) - (quad.data.y + quad.data.style.height/2),
              xSpacing = (quad.data.style.width + d.style.width) / 2 + padding,
              ySpacing = (quad.data.style.height + d.style.height) / 2 + padding,
              absX = Math.abs(x),
              absY = Math.abs(y),
              l, lx, ly;

          if (absX < xSpacing && absY < ySpacing) {
            l = Math.sqrt(x * x + y * y);

            lx = (absX - xSpacing) / l * alpha;
            ly = (absY - ySpacing) / l * alpha;

            if (Math.abs(lx) > Math.abs(ly)) {
              lx = 0;
            } else {
              ly = 0;
            }

            d.x -= x *= lx;
            d.y -= y *= ly;
            quad.data.x += x;
            quad.data.y += y;

            updated = true;
          }
        }
        return updated;
      });
    });
  }

  xCenter(d:any) { 
    return d.x + d.vx + d.style.width / 2;
  }
  yCenter(d:any) { 
    return d.y + d.vy + d.style.height / 2;
  }

  parentOfElement(d:any) {
    return this.nodes[d.nodeData.parentIndex];
  }

}