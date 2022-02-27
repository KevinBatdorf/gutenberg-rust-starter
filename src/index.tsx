import { registerBlockType } from '@wordpress/blocks'
import { useBlockProps as blockProps } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n/build-types'
import { TheBlock } from './TheBlock'
import { Controls } from './Controls'
import blockConfig from './block.json'
import './styles/style.scss'

export type Attributes = {
    text: string
}

registerBlockType<Attributes>('kevinbatdorf/rust-starter', {
    ...blockConfig,
    icon: undefined,
    // Types seem to be mismatched if importing these from block.json
    attributes: {
        text: {
            type: 'string',
            default: 'Loading...',
        },
    },

    title: __('Rust Starter', 'rust-starter'),
    edit: ({ attributes, setAttributes }) => (
        <>
            <Controls attributes={attributes} setAttributes={setAttributes} />
            <div {...blockProps()}>
                <TheBlock {...attributes} />
            </div>
        </>
    ),
    save: ({ attributes }) => {
        return (
            <div {...blockProps.save()}>
                <TheBlock {...attributes} />
            </div>
        )
    },
})
