import { NodeConnectionTypes } from 'n8n-workflow';
import type { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class MarkdownNew implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Markdown New',
		name: 'markdownNew',
		icon: 'file:markdownNew.png',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Convert any URL to clean Markdown using markdown.new',
		defaults: {
			name: 'Markdown New',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [],
		requestDefaults: {
			baseURL: 'https://markdown.new',
			headers: {
				Accept: 'text/markdown',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Convert URL to Markdown',
						value: 'convert',
						action: 'Convert a URL to markdown',
						description: 'Convert a web page to clean Markdown',
						routing: {
							request: {
								method: 'POST',
								url: '/',
							},
						},
					},
				],
				default: 'convert',
			},
			{
				displayName: 'URL',
				name: 'url',
				type: 'string',
				required: true,
				default: '',
				placeholder: 'https://example.com',
				description: 'The URL of the web page to convert to Markdown',
				routing: {
					send: {
						type: 'body',
						property: 'url',
					},
				},
			},
			{
				displayName: 'Method',
				name: 'method',
				type: 'options',
				default: 'auto',
				description: 'The conversion method to use',
				options: [
					{
						name: 'Auto',
						value: 'auto',
					},
					{
						name: 'AI',
						value: 'ai',
					},
					{
						name: 'Browser',
						value: 'browser',
					},
				],
				routing: {
					send: {
						type: 'body',
						property: 'method',
					},
				},
			},
			{
				displayName: 'Retain Images',
				name: 'retainImages',
				type: 'boolean',
				default: false,
				description: 'Whether to keep image references in the output Markdown',
				routing: {
					send: {
						type: 'body',
						property: 'retain_images',
					},
				},
			},
		],
	};
}
