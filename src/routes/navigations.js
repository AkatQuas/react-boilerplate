import cover1 from '@/assets/cover1.png';
import cover2 from '@/assets/cover2.png';
import cover3 from '@/assets/cover3.png';
import cover4 from '@/assets/cover4.png';

export default [
    {
        path: '/admin/workorder',
        title: '工单管理',
        sub: [
            {
                path: '/admin/workorder/list',
                title: '工单列表',
                img: cover4
            }
        ]
    },
    {
        path: '/admin/query',
        title: '数据库操作',
        sub: [
            {
                path: '/admin/query-select',
                title: '查询数据库',
                img: cover2
            },
            {
                path: '/admin/bar',
                title: 'Bar',
                img: cover1
            }
        ]
    },
    {
        path: '/admin/animation',
        title: '动画',
        sub: [
            {
                path: '/admin/animation/basic',
                title: '基础动画',
                img: cover1
            },
            {
                path: '/admin/animation/example',
                title: '动画例子',
                img: cover2
            }
        ]
    },
    {
        path: '/admin/foo',
        title: 'Foos',
        sub: [
            {
                path: '/admin/foo/basic',
                title: '基础动画',
                img: cover3
            },
            {
                path: '/admin/foo/example',
                title: '动画例子',
                img: cover2
            }
        ]
    }
];