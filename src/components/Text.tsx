import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps{
    size?: 'sm' | 'md' | 'lg',
    children: ReactNode,
    asChild?: boolean,
}

export function Text({size = 'md', children, asChild}: TextProps){
    const Component = asChild ? Slot : 'span';

    return (
        <Component className={clsx(
            'text-gray-100 font-sans',
            {
                'text-xs': size === 'sm',
                'text:sm': size === 'md',
                'text-md': size === 'lg',
            }
        )}>
            {children}
        </Component>
    );
}