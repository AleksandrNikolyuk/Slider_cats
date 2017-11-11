
  var target = document.getElementById('target');

  var newDivNode = document.createElement('div');
      // Задаем множественный класс
      newDivNode.className = 'class1 class2 class3';

      // Проверяем наличие класса у блока
      newDivNode.classList.contains("class") // false
      newDivNode.classList.add('StoreClass');
      newDivNode.classList.remove('class2');
      newDivNode.classList.toggle('class1')

      console.log( newDivNode.classList);
      target.appendChild(newDivNode);


      var ul = document.createElement('ul');
      var liArray = ['Game of Thrones', 'Dexter', 'Mr.Robot', 'Fargo', 'Stranger Things'];
      document.body.appendChild(ul); // сначала в документ


      liArray.forEach( function( item ){
          var li = document.createElement('li');
              li.innerText = item
              ul.appendChild( li );
      });
