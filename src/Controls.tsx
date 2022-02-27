import { PanelBody, BaseControl, Button } from '@wordpress/components'
import { __ } from '@wordpress/i18n'
import { InspectorControls } from '@wordpress/block-editor'
import { Attributes } from '.'
import { useState, useEffect } from '@wordpress/element'
import './styles/editor.scss'
import { useServer } from './hooks/useServer'

interface ControlProps {
    attributes?: Attributes
    setAttributes: (attributes: Attributes) => void
}

export const Controls = ({ setAttributes }: ControlProps) => {
    const server = useServer()
    const setQuote = () => {
        if (server?.hasOwnProperty('get_text')) {
            setAttributes({ text: server.get_text() })
        }
    }

    useEffect(() => {
        setQuote()
    }, [server])

    return (
        <InspectorControls>
            <PanelBody title={__('Settings', 'rust-starter')}>
                <BaseControl id="get-text">
                    <Button isPrimary onClick={setQuote}>
                        {__('Get new text', 'rust-starter')}
                    </Button>
                </BaseControl>
            </PanelBody>
        </InspectorControls>
    )
}
