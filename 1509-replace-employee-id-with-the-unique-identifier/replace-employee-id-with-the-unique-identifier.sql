# Write your MySQL query statement below
SELECT e.name,a.unique_id
FROM Employees e
LEFT JOIN EmployeeUNI a ON e.id=a.id