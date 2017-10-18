# svt-cli
Интерфейс командной строки, предоставляющий команды для работы с компонентами Превьюшницы.

# Установка
Ставим глобально.
```
npm install -g svt-cli
```
# Команды
Команды запускаем находясь _sovetnik-components_.
Для доступа к описанию команд из терминала:
```
svt -h
```

Для проверки версии:
```
svt -V
```
## build
Собирает все компоненты.
#### _Формат_
```
svt build [options] [name]
```
#### _Параметры_
```name``` - опциональный параметр, при наличии которого, осуществляется сборка только указанного компонента.

#### _Опции_
```-o, --open``` - открыть компонент в браузере после сборки, работает только при наличии парметра ```name```.

#### _Примеры использования_
Cобрать все компоненты:
```
svt build
```
Cобрать компоненты поискового оффера:
```
svt build search-offer
```
Cобрать и открыть в браузере компонент попапа модели:
```
svt build -o model-popup
```

### open
Открывает собранный компонент в Яндекс.Браузере.
#### _Формат_
```
svt open <name>
```
#### _Параметры_
```name``` - обязательный параметр, имя компонента, который хотим открыть в браузере.

## add
Подготавливает и заполняет шаблонным кодом файлы для нового компонента.

#### _Формат_
```
svt add
```

#### _Описание работы_

При вызове команды начнется диалог, в котором нужно будет задать:
* имя компонента
* описание компонента

В итоге:

* создает в _styles/desktop/css-new_ файл _${name}.css_ с шаблоном стилей компонента
* создает в _components/desktop/new/${name}_ папку компонента
* создает в ней _${name}.js_ файл с шаблоном описания класса
* _${name}.mustache_ с темплейтом компонента
* _style.js_ - описание CSS зависимостей

## start
Бета версия dev-сервера.

#### _Формат_
```
svt start <name>
```

#### _Параметры_
```name``` - обязательный параметр, имя компонента, с которым собираемся работать.

#### _Описание работы_
При вызове:
* собирает компонент
* открывает его в браузере
* начинает отслеживание изменений в исходных файлах
* пересобирает при сохранении изменений
