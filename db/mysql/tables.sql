# https://dataedo.com/kb/query/mysql/list-all-tables-in-all-databases
#
# List tables from all databases in MySQL
#
# The query below lists all tables in all user databases. To list tables just
# from current database use this query.

select table_schema as database_name,
    table_name
from information_schema.tables
where table_type = 'BASE TABLE'
    and table_schema not in ('information_schema','mysql',
                             'performance_schema','sys')
order by database_name, table_name;
