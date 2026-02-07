function unique(arr){
    const uniques = [];
    return arr.filter(item => {
        if(uniques.includes(item)){
            return false;
        }
        uniques.push(item);
        return true;
    })
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O