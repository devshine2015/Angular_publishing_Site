import * as d3 from "d3/index";

export class D3ContextMenu {
    svg:any = null;
    height: any = 0;
    width:any = 0;
    margin:number = 0.1;
    items:any = [];
    rescale: boolean = false;
    meta: null;
    style:any = {
        'rect': {
            'mouseout': {
                'fill': 'rgb(244,244,244)', 
                'stroke': 'white', 
                'strokeWidth': '1px'
            }, 
            'mouseover': {
                'fill': 'rgb(200,200,200)',
                'stroke': 'white',
                'strokeWidth': '0px'
            }
        }, 
        'text': {
            'fill': 'steelblue', 
            'fontSize': '13'
        }
    }; 

    clickListeners: any = [];

    constructor(svg, menuItems) {
        this.svg = svg;
        this.items = menuItems;
        this.rescale = true;
    }

    on(id, listener) {
        this.clickListeners[id] = listener;
    }

    highlight(menu:any, highlight:boolean) {
        if(highlight) {
            menu.style('fill', this.style.rect.mouseover.fill);
            menu.style('stroke', this.style.rect.mouseover.stroke);
            menu.style('stroke-width', this.style.rect.mouseover.strokeWidth);
        }
        else {
            menu.style('fill', this.style.rect.mouseout.fill);
            menu.style('stroke', this.style.rect.mouseout.stroke);
            menu.style('stroke-width', this.style.rect.mouseout.strokeWidth);
        }
    }
    pop(x, y, meta) {
        this.meta= meta;
        let that = this;
        d3.select('.context-menu').remove();
        this.scaleItems();

        // Draw the menu
        this.svg
            .append('g').attr('class', 'context-menu')
            .style('filter', "url('#drop-shadow')")
            .selectAll('tmp')
            .data(this.items).enter()
            .append('g').attr('class', 'menu-entry')
            .style('cursor', 'pointer')
            .on('mouseover', function()  { that.highlight(d3.select(this).select('rect'), true); })
            .on('mouseout', function() { that.highlight(d3.select(this).select('rect'), false); })
            .on('click', (d:any) => {
                if(this.clickListeners[d.id]) this.clickListeners[d.id].func.call(this.clickListeners[d.id].context, this.meta);
            });
        
        d3.selectAll('.menu-entry')
            .append('rect')
            .attr('x', x)
            .attr('y', (d, i) => y + (i * this.height))
            .attr('width', this.width)
            .attr('height', this.height)
            .style('fill', this.style.rect.mouseout.fill)
            .style('stroke', this.style.rect.mouseout.stroke)
            .style('stroke-width', this.style.rect.mouseout.strokeWidth);
        
        d3.selectAll('.menu-entry')
            .append('text')
            .text((d:any) => d.label)
            .attr('x', x)
            .attr('y', (d, i) => y + (i * this.height))
            .attr('dy', this.height - this.margin / 2)
            .attr('dx', this.margin)
            .style('fill', this.style.text.fill)
            .style('font-size', this.style.text.fontSize);

        // Other interactions
        d3.select('body')
            .on('click', function() {
                d3.select('.context-menu').remove();
            });

    }

    // Automatically set width, height, and margin;
    scaleItems() {
        if (this.rescale) {
            this.svg.selectAll('tmp')
                .data(this.items).enter()
                .append('text')
                .text((d:any) => d.label )
                .style('fill', this.style.text.fill)
                .style('font-size', this.style.text.fontSize)
                .attr('x', -1000)
                .attr('y', -1000)
                .attr('class', 'tmp');
            var z = d3.selectAll('.tmp').nodes().map( (x:any) => x.getBBox() );
            this.width = d3.max(z.map((x:any) => x.width));
            this.margin = this.margin * this.width;
            this.width =  this.width + 2 * this.margin;
            this.height = d3.max(z.map((x:any) => x.height + this.margin / 2));
            
            // cleanup
            d3.selectAll('.tmp').remove();
            this.rescale = false;
        }
    }
}