// before
manager = aPerson.department.manager

// after
class Person {
  get manager() {
    return this.department.manager
  }
}
manager = aPerson.manager
