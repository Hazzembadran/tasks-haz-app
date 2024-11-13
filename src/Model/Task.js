class Task {
  id;
  title;
  categoray;
  details;
  startDate;
  endDate;
  status;

  constructor(id, title, categoray, details, startDate, endDate, status) {
    this.id = id;
    this.title = title;
    this.categoray = categoray;
    this.details = details;
    this.startDate = startDate;
    this.endDate = endDate;
    this.status = status;
    
  }
}

export default Task