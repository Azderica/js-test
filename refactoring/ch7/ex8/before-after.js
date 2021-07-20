// before
class Person {
  get manager() {
    return this.department.manager
  }
}
manager = aPerson.manager

// after
manager = aPerson.department.manager
