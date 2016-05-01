(function (global) {

    function showElement(element) {
        element.classList.remove('hidden');
        element.classList.add('visible');
    }

    function hideElement(element) {
        element.classList.remove('visible');
        element.classList.add('hidden');
    }

    function createTable(categories) {
        var tableElement = document.createElement('div');
        tableElement.className = 'grid';
        var rowElement = document.createElement('div');
        rowElement.className = 'row';
        var cellElementDescription = document.createElement('div');
        cellElementDescription.className = 'cell description';
        var cellElementItem = document.createElement('div');
        cellElementItem.className = 'cell item';

        function createCell(task) {
            var item = cellElementItem.cloneNode();
            item.dataset.id = task.id;
            item.dataset.categoryId = task.categoryId;
            item.innerText = task.points;
            return item;
        }

        function createRow(category) {
            var row = rowElement.cloneNode();
            var cell = cellElementDescription.cloneNode();
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

    var content = document.querySelector('#content');
    var tableElement = createTable(global.Categories);
    content.appendChild(tableElement);

    var taskElement =  document.createElement('div');
    taskElement.className = 'task';
    hideElement(taskElement);
    content.appendChild(taskElement);

    var catElement = document.createElement('div');
    catElement.className = 'cat';
    catElement.innerText = 'Котик в мешочке!';
    hideElement(catElement);
    content.appendChild(catElement);



    function initTaskElement(task) {
        if (task.image) {
        } else {
            taskElement.innerText = task.description;
        }
        return taskElement;
    }

    function taskClickHandler(event) {
        event.stopPropagation();
        hideElement(taskElement);
        showElement(tableElement);
        document.body.removeEventListener('click', taskClickHandler);
    }

    function catClickHandler(event) {
        event.stopPropagation();
        hideElement(catElement);
        showElement(taskElement);
        document.body.removeEventListener('click', catClickHandler);
        document.body.addEventListener('click', taskClickHandler);
    }

    function showTask(task) {
        initTaskElement(task);

        if (task.isCat) {
            showElement(catElement);
            document.body.addEventListener('click', catClickHandler);
        } else {
            showElement(taskElement);
            document.body.addEventListener('click', taskClickHandler);
        }
    }

    tableElement.addEventListener('click', function (event) {
        event.stopPropagation();
        var targetElement = event.target;
        if (targetElement.classList.contains('item')) {
            targetElement.innerText = '';

            var id = parseInt(targetElement.dataset.id, 10);
            var categoryId = parseInt(targetElement.dataset.categoryId, 10);
            var task = global.Categories[categoryId].tasks[id];

            if (task && !task.isWatched) {
                task.isWatched = true;
                hideElement(tableElement);
                showTask(task);
            }

        }
    })


})(window);