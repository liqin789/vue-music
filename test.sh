#!/bin/bash
name="李钦"
#readonly name
name="liqin"
#变量的删除 变量的删除 unset 简化劳动力的形式  简化劳动力的形式
#unset name
echo '我的名字是:$name';

your_name='runoob'
str="Hello, I know you are \"$your_name\"! \n"
echo -e $str


string="abcd"
echo ${string:1:3} # 截取字符串的长度 截取字符串的长度 echo ${string:1:3}


array_name=(
value0
value1
value2
value3
)

#数组的输出 数组的输出形式  数组的输出形式 数组的输出形式  shell 进行访问数组的形式 echo ${array_name[0]} 数组的下标
#数组的所有元素
echo ${array_name[*]}

val=`expr 4 + 2`
echo "两数之和为 : $val"

#等号左右不加空格 乘号需要转移的操作  乘号需要转移作
vala=`expr 4 \* 4`
echo "两个数的积是: $vala"


a=10
b=20

#gt 大于  lt小于 gt大于 lt小于 lt小于
if [ $a -gt 100 && $b -gt 100 ]
then
   echo "返回 true"
else
   echo "返回 false"
fi

if [[ $a -lt 100 || $b -gt 100 ]]
then
   echo "返回 true"
else
   echo "返回 false"
fi

#文件的echo 的操作 echo 操作命令 echo命令

#使用转移字符 \转移字符 \转移字符的 可以将原样输出
echo It is a test
echo "It is a test"
echo "\"It is a test\""

printf "121\n"
printf "aaaa\n"


#test 用于测试是否是相等 test 用于是否是相等
# 流程控制语句 shell 流程控制语句
num1="aaa"
num2="aaa"
if test $num1 = $num2
then
    echo '两个数相等！'
else
    echo '两个数不相等！'
fi


#遍历的操作  for in do done for in do done 变量输出的时候 加上$

for str in "this is a demo"
do
    echo $str
done

int=1
while(( $int<=5 ))
do
    echo $int
    let "int++"
done

# case 多条件的匹配 case 多条件匹配




# 声明函数 
fun(){
  echo "我是第一个shell函数"
}

echo "函数开始"
fun
echo "函数结束"

#滚动到顶部的效果




#npm run dev
