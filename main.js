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
            item.textContent = task.points;
            return item;
        }

        function createRow(category) {
            var row = rowElement.cloneNode();
            var cell = cellElementDescription.cloneNode();
            cell.textContent = category.description;
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



    function tableClickHandler (event) {
        event.stopPropagation();
        var targetElement = event.target;
        if (targetElement.classList.contains('item')) {
            targetElement.textContent = '';

            var id = parseInt(targetElement.dataset.id, 10);
            var categoryId = parseInt(targetElement.dataset.categoryId, 10);
            var task = categories[categoryId].tasks[id];

            if (task && !task.isWatched) {
                task.isWatched = true;
                hideElement(tableElement);
                showTask(task);
            }

        }
    }

    function initTaskElement(task) {
        if (task.image) {
            var image = taskImage.cloneNode();
            taskImage.style.backgroundImage = 'url(./images/' + task.image + ')';
            showElement(taskImage);
        } else {
            hideElement(taskImage);
        }
        taskLabel.textContent = task.description;
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

    function auctionClickHandler(event) {
        event.stopPropagation();
        hideElement(auctionElement);
        showElement(taskElement);
        document.body.removeEventListener('click', auctionClickHandler);
        document.body.addEventListener('click', taskClickHandler);
    }

    function showTask(task) {
        initTaskElement(task);

        if (task.isCat) {
            showElement(catElement);
            document.body.addEventListener('click', catClickHandler);
        } else if(task.isAuction) {
            showElement(auctionElement);
            document.body.addEventListener('click', auctionClickHandler)
        } else {
            showElement(taskElement);
            document.body.addEventListener('click', taskClickHandler);
        }
    }


    var content = document.querySelector('#content');
    var categories = [];
    var taskElement =  document.createElement('div');
    taskElement.className = 'task';
    var taskImage = document.createElement('div');
    taskImage.className = 'image';
    var taskLabel = document.createElement('div');
    taskLabel.className = 'label';
    taskElement.appendChild(taskLabel);
    hideElement(taskImage);
    taskElement.appendChild(taskImage);
    hideElement(taskElement);
    content.appendChild(taskElement);

    var catElement = document.createElement('div');
    catElement.className = 'cat';
    catElement.textContent = 'Кот в мешке!';
    var catImage = document.createElement('div');
    catImage.className = 'image';
    catElement.appendChild(catImage);
    hideElement(catElement);
    content.appendChild(catElement);

    var auctionElement = document.createElement('div');
    auctionElement.className = 'auction';
    auctionElement.textContent = 'Аукцион!';
    var auctionImage = document.createElement('div');
    auctionImage.className = 'image';
    auctionElement.appendChild(auctionImage);
    hideElement(auctionElement);
    content.appendChild(auctionElement);

    var tableElement;

    function createRound (number) {
        categories = global.roundCategories[number];
        tableElement = createTable(categories);
        tableElement.addEventListener('click', tableClickHandler);
        content.appendChild(tableElement);
    }


    var buttonsWrapper = document.body.querySelector('.buttons-wrapper');

    function buttonClickHandler(event) {
        var targetElement = event.target;
        if(targetElement.classList.contains('button-start-round')) {
            hideElement(buttonsWrapper);
            createRound(parseInt(targetElement.dataset.id, 10));
            document.body.removeEventListener('click', buttonClickHandler)
        }
    }

    document.body.addEventListener('click', buttonClickHandler)


})(window);