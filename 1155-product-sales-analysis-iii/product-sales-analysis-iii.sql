/* Write your T-SQL query statement below */
SELECT a.product_id,a.year AS first_year,a.quantity,a.price
FROM Sales a
WHERE a.year=(
    SELECT MIN(year) FROM Sales
    WHERE product_id =a.product_id
);