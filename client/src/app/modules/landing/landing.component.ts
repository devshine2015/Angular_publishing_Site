import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { Restangular } from 'ngx-restangular';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import { DataService } from '../../shared/services/dataService';
import { D3Service } from '../../shared/services/D3Service';
import { ArticleAgreeDialog } from "../articles/articleAgreeDialog.component";
import { ArticleFormDialog } from "../articles/articleFormDialog.component";
import * as d3 from "d3/index";
import * as _ from "lodash";
import * as moment from 'moment';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  title = 'Landing Page';

  private data;
  private nodes;

  private currentView: string = 'DEFAULT'; // can be 'FOCUS', 'ARTICLE'

  private focusedGroup : any = null;

  filterViewsOptions : any = [
    { value:"LATEST", title: "Latest" },
    { value:"VIEWS", title: "Views" },
    { value:"S1", title: "State1" },
    { value:"S2", title: "State2" },
    { value:"S3", title: "State3" }
  ];

  filterPeriodOptions : any = [
    { value: 'PAST_DAY', title: "Past day" },
    { value: 'PAST_WEEK', title: "Past week" },
    { value: 'PAST_MONTH', title: "Past month" },
    { value: 'PAST_3MONTHS', title: "Past 3 months" },
    { value: 'PAST_6MONTHS', title: "Past 6 months" },
    { value: 'PAST_YEAR', title: "Past 1 year" },
    { value: 'ALL', title: "All" },
  ];
  stateTriggerOptions: any = {
    slideColor: 'primary',
    disabled: false
  }
  showFilterDialog: boolean = false;
  showSocialMenu: boolean = false;

  svgSize: any = {
    width:0,
    height: 0
  };

  query: any;
  stateView: boolean = false;
  querySearchTextChanged: Subject<string> = new Subject<string>();

  constructor(private router: Router, private restangular: Restangular, private d3Service: D3Service, private dialog: MdDialog) {
    this.querySearchTextChanged
          .debounceTime(300) // wait 300ms after the last event before emitting last event
          .distinctUntilChanged() // only emit if value is different from previous value
          .subscribe(text => {
            this.query.search = text.trim();
            this.onQueryChanges();
          });
  }

  ngOnInit() {
    this.d3Service.init('#svg');

    this.resizeWindow();

    this.d3Service.on('click', this.nodeClick, this);

    this.d3Service.on('dblclick', this.nodeDblClick, this);

    this.d3Service.on('agreedisagree', this.showAgreeDialog, this);

    this.d3Service.on('drilldown', this.switchFocusView, this);


    this.resetQuery();

    this.start();
  }

  onResize($event) {
    this.resizeWindow();
  }

  resizeWindow(width = 0, height = 0) {
    if(width == 0) {
      width = window.innerWidth;
      height = window.innerHeight;
    }
    this.svgSize.width = width;
    this.svgSize.height = height - 128;

    this.d3Service.resize(this.svgSize);
  }

  resetQuery() {
    this.query = {
      search: '',
      views: 'LATEST', 
      period: 'ALL', 
      filter: {
        // g1: '', g2: '', g3: '', g4: '', g6: '', g7: '', 
        g11: '', 
        // g12: '', 
        g13: ''
      },
      user: null, 
      location: null, 
      group: null
    };
    this.stateView = false;
  }

  getQuery() {
    let params = JSON.parse(JSON.stringify(this.query));
    params.periodStart = this.filterPeriodDates[params.period].start;
    params.periodEnd = this.filterPeriodDates[params.period].end;
    delete params.period;
    return _.pickBy(params, (q) => q != null);
  }

  draw(articles) {
    this.nodes = this.initNodes(articles);

    this.data = articles;

    this.d3Service.start(this.nodes);
  }
  start(refreshData: boolean = true) {
    if(refreshData) {
      let apiArticles = this.restangular.all('article');
      apiArticles.customGET('search', this.getQuery()).subscribe(articles => {
        this.draw(articles);
      });
    }
    else {
      this.draw(this.data);
    }
  }

  onPageBack($event) {
    if(this.currentView == 'DEFAULT') return false;
    else if(this.currentView == 'FOCUS') {
      this.query.user = null;
      this.query.location = null;
      this.query.group = null;
      this.currentView = 'DEFAULT';
    }
    else if(this.currentView == 'ARTICLE') this.currentView = 'FOCUS';
    this.start();
    return false;
  }


  onQuerySearchTextChanged(text: string) {
    this.querySearchTextChanged.next(text);
  }

  toggleOffAll() {
    this.showFilterDialog = false;
    this.showSocialMenu = false;
  }

  search() {

  }

  clearSearch() {
    this.query.search = '';
    this.start();
  }

  nodeClick(node, elType) {
    if (node.nodeData.g == 'g0' && elType == 'editLinksArticle') {
      let dialogRef = this.dialog.open(ArticleFormDialog, {
        width: '550px', 
        height: '600px', 
        data: { node: node }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) this.start();
      });
    }
    else {
      if(this.currentView == 'DEFAULT') {
        this.showAgreeDialog(node);
      }
      else if(this.currentView == 'FOCUS') {
        this.switchFocusView(node, elType);
      }
    }
  }

  nodeDblClick(node, elType) {
    if(this.currentView == 'FOCUS') return;

    this.switchFocusView(node, elType);
  }

  showAgreeDialog(node) {
    if(node.nodeData.g == 'g1' || node.nodeData.g == 'g2' || node.nodeData.g == 'g3' || node.nodeData.g == 'g5' || node.nodeData.g == 'g6' || node.nodeData.g == 'g7' || node.nodeData.g == 'g12' || node.nodeData.g == 'g13') {
      // show agree disagree dialog
      let dialogRef = this.dialog.open(ArticleAgreeDialog, {
        width: '350px', 
        data: { node: node }
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    } 
  }

  switchFocusView(node, elType) {
    let nodeType = node.nodeData.type;

    if(nodeType == 'comment' || nodeType == 'article') return;

    this.currentView = 'FOCUS';

    this.query.user = null;
    this.query.location = null;
    this.query.group = null;

    switch(true) {
      case nodeType == 'user': this.query.user = node._id; break;
      case nodeType == 'location': this.query.location = node._id; break;
      case nodeType == 'group': this.query.group = node.group._id; break;
    }

    this.focusedGroup = node;

    this.start();
  }

  onQueryChanges() {
    this.start();
    this.toggleOffAll();
  }

  onStateViewChanges(checked) {
    this.stateView = checked;

    this.start();
  }

  addArticle() {

  }

  toggleSocial() {
    this.showSocialMenu = !this.showSocialMenu;
  }

  initNodes(data) {
    let nodes = [], nodeIndex = 0;
    if(this.currentView == 'FOCUS') {
      _.each(data, (article: any, index) => {
        let oldIndex = _.findIndex(this.data, {_id: article._id});
        if(oldIndex !== -1) {
          data[index] = this.data[oldIndex];
        }
      });

      this.focusedGroup.nodeData.nodeIndex = 0;
      this.focusedGroup.nodeData.parentIndex = nodeIndex;
      this.focusedGroup.nodeData.movable = false;
      this.focusedGroup.nodeData.focused = true;
      this.focusedGroup.fx = this.focusedGroup.x;
      this.focusedGroup.fy = this.focusedGroup.y;
      nodes.push(this.focusedGroup);
      nodeIndex ++;
    }
    nodes = nodes.concat(_.map(data, (d: any) => {
      d.nodeData = {
        nodeIndex: nodeIndex,
        g: 'g0',
        parentIndex: this.currentView == 'FOCUS' ? 0 : nodeIndex,
        type: 'article',
        text: this.getNodeText(d, 'article'),
        link: this.currentView == 'FOCUS' ? { width: 3, color: '#ccc'} : null,
        movable: true
      }
      d.fx = d.fy = null;
      nodeIndex ++;
      return d;
    }));
    data.forEach((article) => {
      let parentGroupsForStates = { S1: null, S2: null, S3: null }; // for stateView only
      let parentGroupsForGroups = { g1: null, g2: null, g3: null, g4: null, g5: null, g6: null, g7: null, g11: null, g12: null, g13: null, g21: null, g22: null }; // for not stateView only
      nodes = nodes.concat(_.map(this.sliceGroup(article.users, 'user'), (d: any, index) => {
        let parentIndex = article.nodeData.nodeIndex;
        if(this.stateView) {
          if(parentGroupsForStates.S3) parentIndex = parentGroupsForStates.S3;
          else parentGroupsForStates.S3 = nodeIndex;
        }
        else {
          if(parentGroupsForGroups.g21) parentIndex = parentGroupsForGroups.g21;
          else parentGroupsForGroups.g21 = nodeIndex;
        }
        d.nodeData = {
          nodeIndex: nodeIndex,
          g: 'g21',
          parentIndex: parentIndex,
          article_id: article._id,
          type: 'user',
          text: this.getNodeText(d, 'user'),
          link: null,
          movable: true
        }
        d.fx = d.fy = null;
        nodeIndex ++;
        return d;
      }));
      nodes = nodes.concat(_.map(this.sliceGroup(article.locations, 'location'), (d: any, index) => {
        let parentIndex = article.nodeData.nodeIndex;
        if(this.stateView) {
          if(parentGroupsForStates.S3) parentIndex = parentGroupsForStates.S3;
          else parentGroupsForStates.S3 = nodeIndex;
        }
        else {
          if(parentGroupsForGroups.g22) parentIndex = parentGroupsForGroups.g22;
          else parentGroupsForGroups.g22 = nodeIndex;
        }
        d.nodeData = {
          nodeIndex: nodeIndex,
          g: 'g22',
          parentIndex: parentIndex,
          article_id: article._id,
          type: 'location',
          text: this.getNodeText(d, 'location'),
          link: null,
          movable: true
        }
        d.fx = d.fy = null;
        nodeIndex ++;
        return d;
      }));
      nodes = nodes.concat(_.map(this.sliceGroup(article.comments, 'comment'), (d: any, index) => {
        let parentIndex = article.nodeData.nodeIndex;
        if(this.stateView) {
          if(parentGroupsForStates.S3) parentIndex = parentGroupsForStates.S3;
          else parentGroupsForStates.S3 = nodeIndex;
        }
        else {
          if(parentGroupsForGroups.g5) parentIndex = parentGroupsForGroups.g5;
          else parentGroupsForGroups.g5 = nodeIndex;
        }
        d.nodeData = {
          nodeIndex: nodeIndex,
          g: 'g5',
          parentIndex: parentIndex,
          article_id: article._id,
          type: 'comment',
          text: this.getNodeText(d, 'comment'),
          link: null,
          movable: true
        }
        d.fx = d.fy = null;
        nodeIndex ++;
        return d;
      }));
      nodes = nodes.concat(_.map(this.sliceGroup(article.groups, 'group'), (d: any, index) => {
        let parentIndex = article.nodeData.nodeIndex;
        if(this.stateView) {
          if(d.group.state) {
            if(parentGroupsForStates[d.group.state]) parentIndex = parentGroupsForStates[d.group.state];
            else parentGroupsForStates[d.group.state] = nodeIndex;
          }
          else {
            if(parentGroupsForStates.S3) parentIndex = parentGroupsForStates.S3;
            else parentGroupsForStates.S3 = nodeIndex;
          }
        }
        else {
          if(parentGroupsForGroups[d.group.groupType]) parentIndex = parentGroupsForGroups[d.group.groupType];
          else parentGroupsForGroups[d.group.groupType] = nodeIndex;
        }
        d.nodeData = {
          nodeIndex: nodeIndex,
          g: d.group.groupType,
          parentIndex:  parentIndex,
          article_id: article._id,
          type: 'group',
          text: this.getNodeText(d, 'group'),
          link: null,
          movable: true
        }
        d.fx = d.fy = null;
        nodeIndex ++;
        return d;
      }));
    });

    _.each(nodes, d => {
      d.shape = DataService.SHAPES[d.nodeData.g];
      d.style = this.getStyle(d);
    });

    return nodes;
  }

  sliceGroup(nodes, nodeType) {
    let sliceNodes = nodes;
    if(this.currentView == 'FOCUS'){
      let focusedType = this.focusedGroup.nodeData.type;
      if(focusedType == nodeType) {
        var focusedId =  focusedType  == 'group' ? this.focusedGroup.group._id : this.focusedGroup._id;
        sliceNodes = _.filter(nodes, (d: any) => {
          let id = focusedType == 'group' ? d.group._id : d._id;
          return focusedId != id;
        });
      }
    }

    if(nodeType == 'comment') {
      sliceNodes = _.chain(sliceNodes)
                    .sortBy(d => d.votes.agrees + d.votes.disagrees)
                    .reverse()
                    .value()
                    .slice(0, DataService.NODE_COUNTS[this.currentView].g5);
    }
    else if(nodeType == 'group') {
      sliceNodes = _.chain(sliceNodes)
                    .groupBy(d => d.group.groupType)
                    .map((groups, g) => _.chain(groups)
                                          .sortBy(d => g == '11' ? d.createdAt : d.votes.agrees + d.votes.disagrees)
                                          .reverse()
                                          .value()
                                          .slice(0, DataService.NODE_COUNTS[this.currentView][g]))
                    .flatten()
                    .value();
    }

    if(nodeType == 'user') {
      sliceNodes = _.chain(sliceNodes)
                    .value()
                    .slice(0, DataService.NODE_COUNTS[this.currentView].g21);
    } else if(nodeType == 'location') {
      sliceNodes = _.chain(sliceNodes)
                    .value()
                    .slice(0, DataService.NODE_COUNTS[this.currentView].g22);
    }

    return sliceNodes;
  }

  getStyle(d:any, preserveSize: boolean = false) {
    let state = d.nodeData.type == 'group' && d.group.state ? d.group.state : 'S3';
    let style = _.extend({
      color: '#000000',
      font: 0,
      width: 0,
      height: 0,
      radius: 0
    }, d.style);

    style.color = DataService.getColor(this.stateView && d.nodeData.g != 'g0' ? state : d.nodeData.g);

    if(!preserveSize) {
      if(d.shape == 'article') {
        style.font = DataService.SIZES[d.nodeData.g].font;
        style.width = DataService.SIZES[d.nodeData.g].width;
        style.height = DataService.SIZES[d.nodeData.g].height;
      }
      else if(d.shape == 'ellipse' || d.shape == 'rect') {
        let rand = DataService.random();
        style.font = d == this.focusedGroup ? DataService.SIZES[d.nodeData.g].font.max * 2 : Math.round(rand * (DataService.SIZES[d.nodeData.g].font.max - DataService.SIZES[d.nodeData.g].font.min)) + DataService.SIZES[d.nodeData.g].font.min;
      }
    }
    return style;
  }

  getNodeText(d, type) {
    switch(true) {
      case type == 'article': return d.title;
      case type == 'user': return d.name;
      case type == 'location': return d.city + ',' + d.state + ',' + d.country;
      case type == 'group': return d.group.name;
      case type == 'comment': return d.text;
    }
  }

  getQueryFilterKeys() {
    return _.keys(this.query.filter);
  }


  filterPeriodDates = {
    PAST_DAY: { start: moment().add(-1, 'days').format(DataService.formats.backend.startdate), end: moment().format(DataService.formats.backend.datetime)},
    PAST_WEEK: { start: moment().add(-7, 'days').format(DataService.formats.backend.startdate), end: moment().format(DataService.formats.backend.datetime)},
    PAST_MONTH: { start: moment().add(-1, 'months').format(DataService.formats.backend.startdate), end: moment().format(DataService.formats.backend.datetime)},
    PAST_3MONTHS: { start: moment().add(-3, 'months').format(DataService.formats.backend.startdate), end: moment().format(DataService.formats.backend.datetime)},
    PAST_6MONTHS: { start: moment().add(-6, 'months').format(DataService.formats.backend.startdate), end: moment().format(DataService.formats.backend.datetime)},
    PAST_YEAR: { start: moment().add(-1, 'years').format(DataService.formats.backend.startdate), end: moment().format(DataService.formats.backend.datetime)},
    ALL: { start: null, end: null}
  };
}
