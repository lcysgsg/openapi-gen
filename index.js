const { generateService, getSchema } = require('openapi2typescript-temp')
const path = require('path')
const fs = require('fs')
const pkgDir = require('pkg-dir')

const FILE_NAME = '.openapi-gen.js'

;(async () => {
    const rootDir = await pkgDir(process.cwd())

    const oJsonPath = path.join(rootDir, FILE_NAME)
    fs.access(oJsonPath, fs.constants.R_OK, (err) => {
        if (err) {
            console.log(`[error] ${oJsonPath} not exists;`)
            process.exit(1)
        }

        console.log(`[openapi4cli] get the file: ${oJsonPath}`)

        const openAPIConfig = require(oJsonPath)

        openAPIConfig.forEach((item) => {
            const serversPath = path.join(
                rootDir,
                item.serversPath || 'src/services'
            )
            const mockFolder = item.mockFolder
                ? path.join(
                      rootDir,
                      typeof item.mockFolder === 'boolean'
                          ? 'src/mock'
                          : item.mockFolder
                  )
                : undefined

            generateService({
                ...item,
                serversPath,
                mockFolder,
            })
        })
    })
})()
