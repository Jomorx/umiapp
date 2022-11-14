import { Response, Request } from '@umijs/deps/compiled/express';
import mockjs from 'mockjs';
const dataList = mockjs.mock({
  code: 200,
  msg: '学院列表加载成功',
  'data|100': [
    {
      'id|+1': 1,
      name: '@name',
      score: '@integer(0,100)',
      city: '@city',
      time: '@date',
    },
  ],
});

export default {
  // 支持值为 Object 和 Array
  'GET /classes/test': [
    {
      username: '张三丰',
      score: 100,
    },
  ],
  'GET /classes/stu': dataList,
  'DELETE /classes/stu': (req: Request, res: Response) => {
    for (let i = 0; i < dataList.data.length; i++) {
      if (dataList.data[i].id == req.query.id) {
        dataList.data.splice(i, 1);
        res.send(dataList);

        return;
      }
    }
  },
};
