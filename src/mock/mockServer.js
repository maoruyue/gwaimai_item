/*
 使用mockjs提供mock数据接口
 */

import Mock from 'mockjs'
import data from './data.json'  //自动接卸为 就是担心

//mock goods 数据的接口
Mock.mock('/goods', {code:0, data: data.goods})
//mock rating数据的接口
Mock.mock('/ratings', {code: 0, data: data.ratings})
//mock info 数据的接口
 Mock.mock('/info', {code:0, data: data.info})





