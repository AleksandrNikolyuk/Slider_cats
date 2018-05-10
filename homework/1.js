
  /*

    Задание 1.

    Написать скрипт который будет будет переключать вкладки по нажатию
    на кнопки в хедере.

    Главное условие - изменять файл HTML нельзя.

    Алгоритм:
      1. Выбрать каждую кнопку в шапке
         + бонус выбрать одним селектором

      2. Повесить кнопку онклик
          button1.onclick = function(event) {

          }
          + бонус: один обработчик на все три кнопки

      3. Написать функцию которая выбирает соответствующую вкладку
         и добавляет к ней класс active

      4. Написать функцию hideAllTabs которая прячет все вкладки.
         Удаляя класс active со всех вкладок

  */

    //
    // var button1 = document.getElementById('buttonContainer').querySelector( 'button' );
    // var button2 = document.getElementById('buttonContainer').querySelectorAll( 'button' )[1];
    // var button3 = document.getElementById('buttonContainer').querySelectorAll( 'button' )[2];
    //     console.log( button1, button2, button3 );
    //
    //
    // var Container1 =  document.getElementById('tabContainer').querySelector('div');
    //     Container1.classList.add( 'active' );
    //
    //     function(item) {
    //         var Container = document.dataset.tab;
    //     }
    //
    // var Container2 =  document.getElementById('tabContainer').querySelectorAll('div')[1];
    //     Container2.classList.add( 'active' );
    //
    //
    // var Container3 =  document.getElementById('tabContainer').querySelectorAll('div')[2];
    //     Container3.classList.add( 'active' );
    //
    //     console.log (Container1, Container2, Container3);

    var buttons = document.querySelectorAll('.showButton');  // Получаем все кнопки
    var tabContainer = document.getElementById('tabContainer'); // Получаем контейнер табов

    function ShowTab( event ){                               // Вешаем обработчик онклик
      var clickedTab = event.target.dataset.tab;             // Получаем индекс вкладки
      var tabs = tabContainer.querySelectorAll('.tab');      // Выбираем все табы В КОНТЕЙНЕРЕ
          tabs.forEach( function (tab) {                     // Перебираем каждую их них
              var tabIndex = tab.dataset.tab;                // Смотрим tab-id каждой из них
              if( tabIndex === clickedTab){                  // Сравниваем
                tab.classList.add('active');
              } else {
                tab.classList.remove('active');
              }
          });
    }

        buttons.forEach( function( item ){                    // Перебираем кнопки
            item.onclick = ShowTab;
        });
