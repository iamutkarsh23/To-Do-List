// Give functionality to check box
var checkboxFunc = (element)=>{

	var previous = $(element).prev();
	if($(element).children().length == 0){
		$(element).append("<i class=\"fa fa-check\" id=\"checkIcon\"></i>");

		$(previous).css({
			'text-decoration':'line-through',
			'color':'green'
		});
	} 
	else{
		$(element).empty();
		$(previous).css({
			'text-decoration':'',
			'color':'black'
		});
	}
}

// Deleting a task
var deleteTask = (element)=> {
	$(element).parent().parent().remove();
}

// Adding a task
$("#add-btn").click(()=>{
	var task = $("#to-do-task").val();
	if(task == "" || (!task.replace(/\s/g, '').length)){
        alert("Please fill in the task! ");
    } else {
		$("#taskList").append(
			"<li class=\"list-group-item\">"+
				"<div class=\"row col-sm-12 pr-0\" style=\"display:inline-flex;\" id=\"single-tasks\">"+
					"<div class=\"col-sm-10 pl-0 pr-0\">"+task+"</div>"+
					"<button class=\"btn col-sm-1 btn-outline-success \" id=\"checkbox\" onClick = checkboxFunc(this)></button>"+
					"<button class=\"btn col-sm-1 btn-outline-danger \" id=\"delete-btn\" onClick = deleteTask(this)><i class=\"fa fa-trash-alt\"></i></button>"+
				"</div>"+
			"</li>"
		);
		document.getElementById("to-do-task").value = "";
	} 
})
// Adding task when 'ENTER' key is pressed
$("#to-do-task").keypress((event)=>{
	if(event.keyCode == 13){
		$("#add-btn").click();
	}
})

// Making the tasks sortable
$("#taskList").sortable();

