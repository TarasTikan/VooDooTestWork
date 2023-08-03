# VooDoo Test

Це тестова робота від компанії Voodoo Ecom в цій роботі є магазин для використання якого знадобились Tailwind.css фреймворк та Shopify API для отримання списку продуктів. У роботі реалізована пагінація, кастомний елемент для розкривання прихованої інформації та кошик з можливістю додавання/видалення продуктів, зміни кількості та розрахунку загальної суми.

## Опис функціональності

## Відображення списку продуктів

- При завантаженні сторінки магазину автоматично буде зроблений запит до Shopify API, який поверне перші 24 продуктів. Список продуктів буде відображений у вигляді карточок з назвою, описом та ціною.

## Пагінація

- Сторінки магазину розділені на блоки по 24 продукти на кожній сторінці. Завдяки пагінації, користувач може перехідати між сторінками для перегляду додаткових продуктів. Всього у магазині 461 продукт, тому настане необхідність у пагінації.

## Кастомний елемент розкривання

- У верхній частині сторінки є чорний блок, на який можна клікнути. При кліку на цей блок він розкриється, показуючи приховану інформацію. За допомогою стилів з Tailwind.css, ми досягаємо красивої анімації для розкривання і згортання блоку.

## Кошик

- На сторінці присутній кошик, який розташований в нижній правій частині. Користувач може додавати або видаляти продукти з кошика, змінювати кількість товарів та обчислювати загальну суму замовлення.

