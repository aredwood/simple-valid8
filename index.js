let validationRules = {
    type:function(x){
        return (["buy","sell"].indexOf(x) !== -1)
    },
    price:function(x){
        return (typeof x === "number" && x > 0)
    },
    amount:function (x) {
        return (typeof x === "number" && x > 0)
    },
    pair:function(x){
        return (x.length === 6 && typeof x === "string");
    }
};

function validate(data,rules){
    let r = {};
    let v = true;
    Object.keys(rules).forEach(function(k){
        if(data[k] === undefined){
            v = false;
        }
        else if(rules[k](data[k])){
            r[k] = data[k]
        }
        else{
            v = false;
        }
    });

    return (v) ? r : v;
}
