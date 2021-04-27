<!--
 * @Descripttion: 
 * @Author: tianxiangbing
 * @Date: 2019-04-02 10:41:30
 * @LastEditTime: 2021-04-27 10:47:47
 * @github: https://github.com/tianxiangbing
 -->
# x-radio-list
# 安装
```
npm install --save x-radio-list
```
# 使用
```
    <RadioList value="1">
    <Radio value="1">aaaa</Radio>
    <Radio value="2">bbb</Radio>
    </RadioList>
    <RadioList value="1">
        <Radio value="1" text="AAA">aaaa</Radio>
        <Radio value="2">bbb</Radio>
    </RadioList>
    <RadioList  disabled={true} disabledCls="disabled" value="1" options={[{value:1,text:"aaa"},{value:2,text:"bbb"}]}>
    </RadioList>
```
# Api
## showTitle
是否显示title提示，默认不显示