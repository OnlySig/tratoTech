import { createStandaloneToast } from "@chakra-ui/toast"

const { toast } = createStandaloneToast()

interface typeToastDefault {
    title: string
    description: string
    duration?: number
    isClosable?: boolean
    status: "info" | "warning" | "success" | "error" | "loading"
}

export const toastDefault = ({ title, description, duration = 2000, isClosable = true, status} : typeToastDefault ) => {
    const toastComponent = toast({
        title: title,
        description: description,
        duration: duration,
        isClosable: isClosable,
        status: status
    })
    return toastComponent
}