import React from 'react'

// ui-core
import AutocompleteCore from '@instructure/ui-core/lib/components/Autocomplete'
import ApplyThemeCore from '@instructure/ui-core/lib/components/ApplyTheme'
import ApplyLocaleCore from '@instructure/ui-core/lib/components/ApplyLocale'
import AlertCore from '@instructure/ui-core/lib/components/Alert'
import AvatarCore from '@instructure/ui-core/lib/components/Avatar'
import BillboardCore from '@instructure/ui-core/lib/components/Billboard'
import BreadcrumbCore from '@instructure/ui-core/lib/components/Breadcrumb'
import ButtonCore from '@instructure/ui-core/lib/components/Button'
import CloseButtonCore from '@instructure/ui-core/lib/components/CloseButton'
import ContainerCore from '@instructure/ui-core/lib/components/Container'
import ContextBoxCore from '@instructure/ui-core/lib/components/ContextBox'
import DialogCore from '@instructure/ui-core/lib/components/Dialog'
import DateInputCore from '@instructure/ui-core/lib/components/DateInput'
import GridCore from '@instructure/ui-core/lib/components/Grid'
import HeadingCore from '@instructure/ui-core/lib/components/Heading'
import ImageCore from '@instructure/ui-core/lib/components/Image'
import LinkCore from '@instructure/ui-core/lib/components/Link'
import ListCore from '@instructure/ui-core/lib/components/List'
import MaskCore from '@instructure/ui-core/lib/components/Mask'
import MediaCore from '@instructure/ui-core/lib/components/Media'
import MetricsListCore from '@instructure/ui-core/lib/components/MetricsList'
import ModalCore from '@instructure/ui-core/lib/components/Modal'
import PillCore from '@instructure/ui-core/lib/components/Pill'
import PopoverCore from '@instructure/ui-core/lib/components/Popover'
import PopoverMenuCore from '@instructure/ui-core/lib/components/PopoverMenu'
import PortalCore from '@instructure/ui-core/lib/components/Portal'
import PositionCore from '@instructure/ui-core/lib/components/Position'
import ProgressCore from '@instructure/ui-core/lib/components/Progress'
import SelectCore from '@instructure/ui-core/lib/components/Select'
import TableCore from '@instructure/ui-core/lib/components/Table'
import TagCore from '@instructure/ui-core/lib/components/Tag'
import TextCore from '@instructure/ui-core/lib/components/Text'
import TimeInputCore from '@instructure/ui-core/lib/components/TimeInput'
import ToggleDetailsCore from '@instructure/ui-core/lib/components/ToggleDetails'
import TooltipCore from '@instructure/ui-core/lib/components/Tooltip'
import TransitionCore from '@instructure/ui-core/lib/components/Transition'
import TrayCore from '@instructure/ui-core/lib/components/Tray'
import TreeBrowserCore from '@instructure/ui-core/lib/components/TreeBrowser'
import AccessibleContentCore from '@instructure/ui-core/lib/components/AccessibleContent'
import PresentationContentCore from '@instructure/ui-core/lib/components/PresentationContent'
import ScreenReaderContentCore from '@instructure/ui-core/lib/components/ScreenReaderContent'
import PaginationCore from '@instructure/ui-core/lib/components/Pagination'
import MenuCore from '@instructure/ui-core/lib/components/Menu'
import FormFieldCore from '@instructure/ui-core/lib/components/FormField'
import FormFieldGroupCore from '@instructure/ui-core/lib/components/FormFieldGroup'
import CheckboxCore from '@instructure/ui-core/lib/components/Checkbox'
import CheckboxGroupCore from '@instructure/ui-core/lib/components/CheckboxGroup'
import RadioInputCore from '@instructure/ui-core/lib/components/RadioInput'
import RadioInputGroupCore from '@instructure/ui-core/lib/components/RadioInputGroup'
import RangeInputCore from '@instructure/ui-core/lib/components/RangeInput'
import FileDropCore from '@instructure/ui-core/lib/components/FileDrop'
import TextAreaCore from '@instructure/ui-core/lib/components/TextArea'
import TextInputCore from '@instructure/ui-core/lib/components/TextInput'
import NumberInputCore from '@instructure/ui-core/lib/components/NumberInput'

//ui-forms
import FormFieldGroupForms from '@instructure/ui-forms/lib/components/FormFieldGroup'
import FormFiledForms from '@instructure/ui-forms/lib/components/FormField'
import NumberInputForms from '@instructure/ui-forms/lib/components/NumberInput'

//ui-icons
import IconAddLine from 'instructure-icons/lib/Line/IconAddLine'

const deprecatedComponents = [
  // ui-core
  { Component: AutocompleteCore, origin: 'ui-core', props: { label: 'hello' } },
  { Component: ApplyThemeCore, origin: 'ui-core' },
  { Component: ApplyLocaleCore, origin: 'ui-core' },
  { Component: AlertCore, origin: 'ui-core', props: { children: 'some alert' } },
  { Component: AvatarCore, origin: 'ui-core', props: { name: 'Foo Bar' } },
  { Component: BillboardCore, origin: 'ui-core', props: { message: 'hello' } },
  { Component: BreadcrumbCore, origin: 'ui-core', props: { label: 'hello' } },
  { Component: ButtonCore, origin: 'ui-core', props: { children: 'click me' } },
  { Component: CloseButtonCore, origin: 'ui-core', props: { children: 'click me' } },
  { Component: ContainerCore, origin: 'ui-core' },
  { Component: ContextBoxCore, origin: 'ui-core', props: { children: 'hello' } },
  { Component: DialogCore, origin: 'ui-core' },
  { Component: DateInputCore, origin: 'ui-core', props: {
    label: 'hello',
    previousLabel: 'prev',
    nextLabel: 'next'
  }},
  { Component: GridCore, origin: 'ui-core' },
  { Component: HeadingCore, origin: 'ui-core', props: { children: 'heading' } },
  { Component: ImageCore, origin: 'ui-core', props: { src: 'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/03/6990634-panda-hug.jpg?itok=-b6_uG4r&fc=50,50' } },
  { Component: LinkCore, origin: 'ui-core', props: { children: 'link' } },
  { Component: ListCore, origin: 'ui-core' },
  { Component: MaskCore, origin: 'ui-core' },
  { Component: MediaCore, origin: 'ui-core', props: { children: 'media' } },
  { Component: MetricsListCore, origin: 'ui-core' },
  { Component: ModalCore, origin: 'ui-core', props: { label: 'hello'} },
  { Component: PillCore, origin: 'ui-core', props: { children: 'pill', text: 'foo' } },
  { Component: PopoverCore, origin: 'ui-core' },
  { Component: PopoverMenuCore, origin: 'ui-core', props: { trigger: <button>foo</button> } },
  { Component: PortalCore, origin: 'ui-core' },
  { Component: PositionCore, origin: 'ui-core' },
  { Component: ProgressCore, origin: 'ui-core', props: { label: 'hello' } },
  { Component: SelectCore, origin: 'ui-core', props: { label: 'hello' } },
  { Component: TableCore, origin: 'ui-core', props: { caption: 'my table'} },
  { Component: TagCore, origin: 'ui-core', props: { text: 'hello'} },
  { Component: TextCore, origin: 'ui-core' },
  { Component: TimeInputCore, origin: 'ui-core', props: { label: 'hello' } },
  { Component: ToggleDetailsCore, origin: 'ui-core', props: { summary: 'hello' } },
  { Component: TooltipCore, origin: 'ui-core', props: { tip: 'hello', children: <button>click</button> } },
  { Component: TransitionCore, origin: 'ui-core', props: { children: <span>transition</span> } },
  { Component: TrayCore, origin: 'ui-core', props: { label: 'hello'} },
  { Component: TreeBrowserCore, origin: 'ui-core', props: {
    collections: {id: 1},
    items: {id: 1}
  }},
  { Component: AccessibleContentCore, origin: 'ui-core' },
  { Component: PresentationContentCore, origin: 'ui-core' },
  { Component: ScreenReaderContentCore, origin: 'ui-core' },
  { Component: PaginationCore, origin: 'ui-core'},
  { Component: MenuCore, origin: 'ui-core'},
  { Component: FormFieldCore, origin: 'ui-core', props: { label: 'hello', id: '1' } },
  { Component: FormFieldGroupCore, origin: 'ui-core', props: { description: 'hi' } },
  { Component: CheckboxCore, origin: 'ui-core', props: { label: 'hi' } },
  { Component: CheckboxGroupCore, origin: 'ui-core', props: { name: 'hello', description: 'there' } },
  { Component: RadioInputCore, origin: 'ui-core', props: { label: 'hello' } },
  { Component: RadioInputGroupCore, origin: 'ui-core', props: { name: 'hello', description:'hi' } },
  { Component: RangeInputCore, origin: 'ui-core', props: { label: 'hello' } },
  { Component: FileDropCore, origin: 'ui-core', props: { label: 'hello' } },
  { Component: TextAreaCore, origin: 'ui-core', props: { label: 'hello' } },
  { Component: TextInputCore, origin: 'ui-core', props: { label: 'hello' } },
  { Component: NumberInputCore, origin: 'ui-core', props: { label: 'hi' } },
  // ui-forms
  { Component: FormFieldGroupForms, origin: 'ui-forms', props: { description: 'hi' } },
  { Component: FormFiledForms, origin: 'ui-forms', props: { label: 'hello', id: '1' } },
  { Component: NumberInputForms, origin: 'ui-forms', props: { label: 'hello' } },
  // ui-icons
  { Component: IconAddLine, origin: 'instructure-icons'}
]

export default deprecatedComponents
