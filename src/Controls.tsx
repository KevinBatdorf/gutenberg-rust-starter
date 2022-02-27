import { PanelBody, BaseControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n'
import { InspectorControls } from '@wordpress/block-editor'
import './styles/editor.scss'
import { Attributes } from '.'
import { useState, useEffect } from '@wordpress/element'

interface ControlProps {
    attributes: Attributes
    setAttributes?: (attributes: Attributes) => void
}

export const Controls = ({ attributes, setAttributes }: ControlProps) => {
    const [text, setText] = useState('')
    const handleClick = () => {}
    useEffect(() => {
        setText(attributes.text)
    }, [attributes.text])

    return (
        <InspectorControls>
            <PanelBody title={__('Settings', 'rust-starter')}>
                <BaseControl id="ok" label={__('Get new text')}>
                    <button onClick={handleClick}>
                        {__('Get new text', 'rust-starter')}
                    </button>
                </BaseControl>
            </PanelBody>
        </InspectorControls>
    )
}
