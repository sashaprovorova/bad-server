import { IProduct } from '../../../utils/types'

export interface ProductFormValues
    extends Pick<IProduct, 'title' | 'description' | 'price'> {}

export type SelectOption<T extends string = string> = {
    value: T
    label: string
}

export type FilterValue =
    | string
    | number
    | boolean
    | SelectOption
    | null
    | undefined
