import { ts, Project, StructureKind } from "ts-morph";

const project = new Project({
  tsConfigFilePath: "./tsconfig.json"
});

project.addSourceFilesAtPaths(["**/*.ts", "!**/*.d.ts"]);
const meteorMethods = project.getSourceFileOrThrow('./scripts/test.ts')


const serverType = meteorMethods
  .getVariableDeclaration('server')
  .getType()

const methodsImports = meteorMethods.getImportDeclarations()[0].getSourceFile().getText()

const importsFile = project.createSourceFile('./scripts/Server.ts', {
  leadingTrivia: methodsImports,
  statements: [
    // imports source code
    {
      kind: StructureKind.TypeAlias,
      name: 'Server',
      type: serverType.getText(),
      isExported: true
    }
  ]
}, { overwrite: true })

console.log(importsFile.getVariableDeclaration('server'));

console.log(
  serverType.getText()
)


importsFile.formatText({
  ensureNewLineAtEndOfFile: true,
  insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: true,
  insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: true,
  insertSpaceAfterOpeningAndBeforeClosingNonemptyParentheses: true,
  insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: true,
  insertSpaceAfterSemicolonInForStatements: true,
  insertSpaceAfterOpeningAndBeforeClosingEmptyBraces: true,
  insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces: true,
  insertSpaceAfterTypeAssertion: true,
  insertSpaceBeforeFunctionParenthesis: true,
})
await project.save()
