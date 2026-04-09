export default function RSLogo({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="34" height="34" rx="9" fill="#1A1A18" />
      <text
        x="5"
        y="24"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontSize="17"
        fontWeight="800"
        fill="white"
      >
        RS
      </text>
    </svg>
  )
}
