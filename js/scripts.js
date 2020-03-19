const matrix = [
    [11975,  5871, 8916, 2868],
    [ 1951, 10048, 2060, 6171],
    [ 8010, 16145, 8090, 8045],
    [ 1013,   990,  940, 6907]
];
const table = d3.select('body').append('table');

const tr = table.selectAll('tr')
    .data(matrix)
    .enter()
    .append('tr');

const td = tr.selectAll('td')
    .data((d) => {return d})
    .enter()
    .append('td')
    .text((d) => {return d});

tr.on('mouseover', function () {
    d3.select(this)
        .attr('style', 'background: #9803fc');
});


td.on('mouseover', function () {
    d3.select(this)
        .attr('style', 'background: #fc03db');
});       



