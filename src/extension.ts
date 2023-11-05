import * as vscode from 'vscode'
import { exportHtml } from './commands/exportHtml'
import { exportInlinedHtml } from './commands/exportInlinedHtml'
import { showPreview } from './commands/showPreview'
import { openInBrowser } from './commands/openInBrowser'
import { ContainerManager } from './ContainerManager'

export function activate(context: vscode.ExtensionContext) {

	const outputChannel = vscode.window.createOutputChannel("asciidoc presentation")
	const appendLine = (value: string) => outputChannel.appendLine(value)
	const containerManager = new ContainerManager(context, appendLine)

	context.subscriptions.push(vscode.commands.registerCommand('asciidocPresentation.preview', () => showPreview(containerManager)))
	context.subscriptions.push(vscode.commands.registerCommand('asciidocPresentation.exportHtml', () => exportHtml(containerManager)))
	context.subscriptions.push(vscode.commands.registerCommand('asciidocPresentation.exportInlinedHtml', () => exportInlinedHtml(containerManager)))
	context.subscriptions.push(vscode.commands.registerCommand('asciidocPresentation.openInBrowser', () => openInBrowser(containerManager)))
}
