export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /* name */
  set name(v) {
    if (typeof v !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }

    this._name = v;
  }

  get name() {
    return this._name;
  }

  /* length */
  set length(v) {
    if (typeof v !== 'number') {
      throw new Error('TypeError: Length must be a number');
    }
    this._length = v;
  }

  get length() {
    return this._length;
  }

  /* students */

  set students(v) {
    if (!Array.isArray(v)) {
      throw new Error('TypeError: Length must be an array');
    }
    this._students = v;
  }

  get students() {
    return this._students;
  }
}
