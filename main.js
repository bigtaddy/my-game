(function(global){


    function createTable (categories) {
        var tableElement = document.createElement('div');
        tableElement.className = 'grid';
        var rowElement =  document.createElement('div');
        rowElement.className = 'row';
        var cellElementDescription =  document.createElement('div');
        cellElementDescription.className = 'cell description';
        var cellElementItem =  document.createElement('div');
        cellElementItem.className = 'cell item';

        function createCell(task) {
            var item  = cellElementItem.cloneNode();
            item.dataset.id = task.id;
            item.dataset.categoryId = task.categoryId;
            item.innerText = task.points;
            return item;
        }

        function createRow(category) {
            var row = rowElement.cloneNode();
            var cell  = cellElementDescription.cloneNode();
            cell.innerText = category.description;
            row.appendChild(cell);

            category.tasks.forEach(function (task) {
                row.appendChild(createCell(task));
            });

            return row;
        }

        categories.forEach(function (category) {
            tableElement.appendChild(createRow(category));
        });

        return tableElement;
    }

    function createTaskElement(task) {
        var taskElement = document.createElement('div');
        taskElement.className = 'task';

        if(task.image) {

        } else {
            taskElement.innerText = task.description;
        }

        return taskElement;
    }



    var content = document.querySelector('#content');
    var tableElement = createTable(global.Categories);
    content.appendChild(tableElement);
    var taskElement = null;


    function taskClickHandler (event) {
        content.removeChild(taskElement);
        tableElement.style.display = 'block';
        document.body.removeEventListener('click', taskClickHandler);
    }


    tableElement.addEventListener('click', function (event) {
        event.stopPropagation();
        var targetElement = event.target;
        if(targetElement.classList.contains('item')) {
            tableElement.style.display = 'none';
            targetElement.innerText = '';

            var id = parseInt(targetElement.dataset.id, 10);
            var categoryId = parseInt(targetElement.dataset.categoryId, 10);
            var task = global.Categories[categoryId].tasks[id];

            if(task) {
                taskElement = createTaskElement(task);
                content.appendChild(taskElement);
                document.body.addEventListener('click', taskClickHandler);
            }

        }
    })





})(window);