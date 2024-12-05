import { INodeType } from 'n8n-workflow';
import { Sefaria } from './Sefaria.node';

describe('Sefaria', () => {
	let node: INodeType;

	beforeEach(() => {
		node = new Sefaria();
	});

	it('should initialize', () => {
		expect(node).toBeDefined();
	});
});
