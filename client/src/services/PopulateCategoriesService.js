const PopulateCategories = function(abstracts){
    // a category is {filter: , number: }
    const years = ['2021', '2020', '2019', '2018', '2017', '2016', '2015'];
    const months = ["Dec", "Nov", "Oct", "Sep", "Aug", "Jul", "Jun", "May", "Apr", "Mar", "Feb", "Jan"];
    const categories = [];
    categories.push({ filter: 'posts/all', number: abstracts.length});

    years.forEach( function(year){
        const filteredByYear = abstracts.filter( function(abstract){
            const filterYear = '' +  /^[0-9]+/.exec(abstract.filter) ;
            return ( year === filterYear )
        });
        if(filteredByYear.length !== 0){
            months.forEach( function(month) {
                const lowerCaseMonth = month.toLowerCase();
                const filteredByMonth = filteredByYear.filter(function(abstract){
                    const filterMonth =  '' + /[a-zA-Z]+/.exec(abstract.filter);
                    return ( lowerCaseMonth === filterMonth )
                })
                if(filteredByMonth.length !== 0){
                    categories.push({
                        filter: year + '/' + lowerCaseMonth,
                        number: filteredByMonth.length
                    });
                }
            });
        }
    });
    return categories;
}

export default PopulateCategories;
