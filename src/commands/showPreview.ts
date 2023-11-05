import * as vscode from 'vscode'
import { ContainerManager } from "../ContainerManager"

export function showPreview(containerManager: ContainerManager) {
    containerManager.checkActiveEditor().andDo(
        (_editor, container) => {
            if(!container.hasWebviewPanel()) {
                const panel = vscode.window.createWebviewPanel('Asciidoc Presentation', 'Asciidoc Presentation Preview', vscode.ViewColumn.Beside, { enableScripts: true })
                container.setWebviewPanel(panel)
            }
        })
}