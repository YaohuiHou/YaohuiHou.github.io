---
sidebar: auto
---

# SQL 语句

## SELECT

1、搜索 ‘order 表’ 中全部的内容
SELECT \* FROM order

2、只获取对应列的内容
SELECT LastName,FirstName FROM order
SELECT LastName FROM order

## SELECT DISTINCT

3、获取列表，不重复 SELECT DISTINCT
SELECT DISTINCT LastName FROM order

## WHERE

4、条件语句 where

请注意，我们在例子中的条件值周围使用的是单引号。
SQL 使用单引号来环绕文本值（大部分数据库系统也接受双引号）。如果是数值，请不要使用引号。

文本：
这是正确的：
SELECT _ FROM Persons WHERE FirstName='Bush'
这是错误的：
SELECT _ FROM Persons WHERE FirstName=Bush
数值：
这是正确的：
SELECT _ FROM Persons WHERE Year>1965
这是错误的：
SELECT _ FROM Persons WHERE Year>’1965'

## AND 和 OR

5、AND 和 OR 运算符
select \_ FROM order where FirstName=‘Bush’ AND LastName=‘Carter’

select \_ FROM order where FirstName=‘Bush’ OR LastName=‘Carter’

    select * FROM order where (FirstName=‘Bush’ AND LastName=‘Carter’) OR city=‘Beijing’

## ORDER BY / ORDER BY name DESC

6、ORDER BY 语句 - 正序排序 DESC - 倒序

- 以 City 排序
  Select \* from order ORDER BY City
- City 排序，相同 CIty 下根据 LastName 排序
  Select \* from order ORDER BY City, LastName
- City 倒序
  SELECT \* FROM order ORDER BY City DESC

## INSERT INTO

7、INSERT INTO 插入语句

- 插入新的一行
  INSERT INTO order VALUES (10,'哈哈哈’,’first’,’hello’,’world’)
- 插入指定的列
  INSERT INTO order (LastName,FirstName) VALUES (‘灰灰’,’猪猪')

## UPDATA

8、Updata 修改语句

    UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值

- 更新某一行中的一列
  UPDATA order SET LastName=‘这是更新的值’ WHERE FirstName=Adams
- 更新某一行中的若干列
  UPDATA order SET LastName=‘新值 1’,city=‘新值 2’ WHERE FIrstName=Adams

## DELETE

9、DELETE 删除语句

DELETE FROM order WHERE
