import { useFeatureFlag, usePostHog } from '@/posthog'
import { useEffect, useState } from 'react'

export default function Test() {
    const posthog = usePostHog()

    const result = useFeatureFlag('test')

    return (
        <div>
            <p>Test</p>
            <button onClick={() => posthog?.capture('Clicked')}>This is a button</button>
            <p>Feature flag response: {JSON.stringify(result)}</p>
        </div>
    )
}