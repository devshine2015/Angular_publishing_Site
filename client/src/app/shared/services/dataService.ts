import {Injectable} from '@angular/core';
import * as _ from 'lodash';

export class DataService {
  public static formats = {
    backend: {
      date: 'YYYY-MM-DD',
      startdate: 'YYYY-MM-DD 00:00:00',
      enddate: 'YYYY-MM-DD 23:59:59',
      datetime: 'YYYY-MM-DD HH:mm:ss'
    }
  };
  public static COLORS: any = {
    g0: ['#ffffff'],
    g1: [ '#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5'],
    g2: [ '#eceff1', '#cfd8dc', '#607d8b', '#546e7a'],
    g3: [ '#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835'],
    g4: [ '#d1c4e9', '#b39ddb', '#7e57c2', '#673ab7'],
    g5: [ '#fafafa', '#f5f5f5', '#eeeeee' ],  //comment
    g6: [ '#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4'],
    g7: [ '#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#cddc39', '#c0ca33' ],
    g11: ['#ff5722'],
    g12: [ '#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043'],
    g13: [ '#efebe9', '#d7ccc8', '#bcaaa4'],
    g21: [ '#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1' ], //user
    g22: [ '#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00' ],  //location
    // states
    S1: ['#E8F5E9', '#C8E6C9', '#A5D6A7', '#81C784', '#66BB6A', '#4CAF50'],
    S2: ['#FFEBEE', '#FFCDD2', '#EF9A9A', '#E57373'],
    S3: ['#FAFAFA', '#F5F5F5', '#EEEEEE', '#E0E0E0', '#BDBDBD', '#9E9E9E']
  };

  public static SHAPES: any = {
    g0: 'article',
    g1: 'ellipse',
    g2: 'rect',
    g3: 'ellipse',
    g4: 'rect',
    g5: 'rect',  //comment
    g6: 'rect',
    g7: 'ellipse',
    g11: 'rect',
    g12: 'ellipse',
    g13: 'ellipse',
    g21: 'ellipse', //user
    g22: 'ellipse'  //location
  };

  public static NODE_COUNTS: any = {
    DEFAULT:  {  g1: 5,  g2: 5, g3: 5, g4: 5, g5: 20, g6: 5, g7: 5, g11: 5, g12: 5, g13: 5, g21: 5, g22: 5 },
    FOCUS:    {  g1: 10,  g2: 10, g3: 10, g4: 10, g10: 20, g6: 10, g7: 10, g11: 1, g12: 10, g13: 10, g21: 10, g22: 10 },
    ARTICLE:  {  g1: 15,  g2: 15, g3: 15, g4: 15, g15: 100, g6: 15, g7: 15, g11: 1, g12: 15, g13: 15, g21: 15, g22: 15 }
  };

  public static SIZES: any = {
    g0: { font: 14, width: 350, height: 100},
    g1: { font: { min: 10, max: 24} },
    g2: { font: { min: 10, max: 18} },
    g3: { font: { min: 10, max: 24} },
    g4: { font: { min: 10, max: 18} },
    g5: { font: { min: 10, max: 14} },  //comment
    g6: { font: { min: 10, max: 18} },
    g7: { font: { min: 10, max: 24} },
    g11: { font: { min: 24, max: 24} },
    g12: { font: { min: 10, max: 24} },
    g13: { font: { min: 10, max: 24} },
    g21: { font: { min: 10, max: 24} }, //user
    g22: { font: { min: 10, max: 24} }  //location
  };

  public static getColor(g, weight = 0) {
    if(this.COLORS[g].length == 1) return this.COLORS[g][0];
    let index = Math.floor(DataService.random() * this.COLORS[g].length);
    return this.COLORS[g][index];
  }

  public static random() {
    return Math.random();
  }
}

