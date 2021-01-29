const ApplyFilter = function(x, filter) {
    if(filter === 'posts/all'){
        return x;
    } else {
        return x.filter(function(abstract) {
            return abstract.filter === filter;
        });
    }
};

export default ApplyFilter;
