//on form submit
//create new form data
//ajax call to upload file

$("#form").on("submit", event => {
  event.preventDefault();
  let fileData = new FormData($("#form")[0]);

  $.ajax({
    url: "/report",
    type: "POST",
    data: fileData,
    contentType: false,
    processData: false,
    success: () => {
      console.log("Successfully uploaded!");
    },
    error: err => {
      console.log("ERROR!");
    }
  });
});

// $("#note_form").on("submit", function(e) {
//   e.preventDefault();
//   var formData = new FormData($("#form")[0]);

//   $.ajax({
//     url: "/report",
//     type: "POST",
//     //   dataType:"json",
//     data: formData,
//     contentType: false,
//     processData: false,
//     success: function(data) {
//       // .success stuff here
//     }
//   });
// });
