# openAPI gen

始于 [antd-pro openapi](https://beta-pro.ant.design/docs/openapi-cn)， 但是依赖 `umi`，所以，为了更通用提取成了这个库。

## 安装

`$ yarn add -D openapi-gen`

## 使用

在根目录下创建 `.openapi-gen.js` 文件

```js
module.exports = [
    // https://github.com/lcysgsg/openapi2typescript/blob/main/src/index.ts#L20
    // 参考 @umijs/openapi type GenerateServiceProps
    // export type GenerateServiceProps = {
    //     requestLibPath?: string;
    //     requestImportStatement?: string;
    //     /**
    //      * api 的前缀
    //      */
    //     apiPrefix?:
    //         | string
    //         | ((params: {
    //             path: string;
    //             method: string;
    //             namespace: string;
    //             functionName: string;
    //             autoExclude?: boolean;
    //         }) => string);
    //     /**
    //      * 生成的文件夹的路径
    //      */
    //     serversPath?: string;
    //     /**
    //      * openAPI 3.0 的地址
    //      */
    //     schemaPath?: string;
    //     /**
    //      * 项目名称
    //      */
    //     projectName?: string;

    //     hook?: {
    //         /** 自定义函数名称 */
    //         customFunctionName?: (data: OperationObject) => string;
    //         /** 自定义类名 */
    //         customClassName?: (tagName: string) => string;
    //     };
    //     namespace?: string;

    //     mockFolder?: string;
    // };
    {
        projectName: 'api',
        schemaPath: 'http://192.168.1.251:7000/working/v3/api-docs/api',
        requestLibPath: "import { request } from '@/utils/request'",
    },
    {
        projectName: 'hk',
        schemaPath: 'http://192.168.1.251:7000/working/v3/api-docs/hk',
        requestLibPath: "import { request } from '@/utils/request'",
    },
]
```

`$ yarn openapi-gen`
