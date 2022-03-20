import { PanelBody, BaseControl, Button } from '@wordpress/components'
import { __ } from '@wordpress/i18n'
import { InspectorControls } from '@wordpress/block-editor'
import { useEffect } from '@wordpress/element'
import { useServer } from '../hooks/useServer'
import type { Attributes } from '..'
import './editor.css'

interface ControlProps {
    attributes: Attributes
    setAttributes: (attributes: Attributes) => void
}

export const Controls = ({ attributes, setAttributes }: ControlProps) => {
    const server = useServer()
    const setQuote = () => {
        if (server?.hasOwnProperty('get_text')) {
            setAttributes({ text: server.get_text() })
        }
    }

    useEffect(() => {
        if (attributes.text === 'Loading...') {
            setQuote()
        }
    }, [server])

    return (
        <InspectorControls>
            <PanelBody title={__('Settings', 'rust-starter')}>
                <BaseControl id="get-text">
                    {/* To use TW just wrap the class with your namespace as //
                    defined in tailwind.config.js file */}
                    <div className="rust-starter">
                        <div className="p-4 bg-gray-200 mb-4">
                            This area built with Tailwind CSS. The button below
                            will use Rust to process the request.
                        </div>
                        <Button isPrimary onClick={setQuote}>
                            {__('Get new text', 'rust-starter')}
                        </Button>
                    </div>
                </BaseControl>
            </PanelBody>
        </InspectorControls>
    )
}
