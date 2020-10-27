class CustomSet {
  constructor(elements = []) {
    this.elements = elements
  }

  empty() {
    return this.elements.length === 0;
  }

  contains(ele) {
    return this.elements.includes(ele);
  }

  subset(otherSet) {
    return this.elements.every(ele => {
      return otherSet.contains(ele);
    })
  }

  disjoint(otherSet) {
    return this.elements.every(ele => {
      return !otherSet.contains(ele);
    });
  }

  eql(otherSet) {
    if (this.elements.length !== otherSet.elements.length) {
      return false;
    }
    return this.subset(otherSet);
  }

  add(ele) {
    if (!this.contains(ele)) {
      this.elements.push(ele);
    }
    return this;
  }

  intersection(otherSet) {
    let forNewArr = this.elements.filter(ele => {
      return otherSet.contains(ele);
    })
    return new CustomSet(forNewArr);
  }

  difference(otherSet) {
    let forNewArr = this.elements.filter(ele => {
      return !otherSet.contains(ele);
    })
    return new CustomSet(forNewArr);
  }

  union(otherSet) {
    let comboSet = new CustomSet(this.elements)
    otherSet.elements.forEach(ele => {
      comboSet.add(ele)
    });
    return comboSet;
  }
}

module.exports = CustomSet;
