module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement>=20){
    console.log("Item is at max enhancement!")
    return item
  }
  else{
    return {...item, enhancement: item.enhancement+1}
  }
};

function fail(item) {
  if(item.enhancement < 15){
    if(item.durability<5){
      return {...item, durability: 0}
    }
    else{
      return{...item, durability:item.durability-5}}
  }
  else if(item.enhancement>=15){
    if(item.enhancement<=16){
      if(item.durability<10){
        return {...item, durability:0}
      }
      else {
        return{...item, durability:item.durability-10}}
    }
    else if(item.enhancement>16){
      if(item.durability<10){
        return{...item, durability:0, enhancement:item.enhancement-1}
      }
      else{
      return{...item, durability: item.durability-10, enhancement: item.enhancement-1}
      }
    }
  }
}

function repair(item) {
  return { ...item, durability:100 };
}

function get(item) {
  return { ...item };
}
