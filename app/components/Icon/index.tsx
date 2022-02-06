import { memo } from "react"
import { Instagram } from "./Instagram"
import { Location } from "./Location"

const icons = {
  'location': <Location />,
  'instagram': <Instagram />
}

type IconProps = {
  name: 'location' | 'instagram'
}

const Icon = ({ name }: IconProps) => {
  return icons[name]
}

export default memo(Icon)