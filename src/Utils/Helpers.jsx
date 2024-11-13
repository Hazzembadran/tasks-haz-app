import Swal from "sweetalert2";

class Helpers {
  static showMessage(title, text, icon) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      showConfirmButton: false,
      showCancelButton: false,
      timer: 1333,
    });
  }
}

export default Helpers;
