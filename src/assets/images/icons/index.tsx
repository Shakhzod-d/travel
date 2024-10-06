interface Props {
  fill: string
}

export const Experts = ({ fill }: Props) => {
  return (
    <>
      <svg
        width="270"
        height="44"
        viewBox="0 0 270 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.33105 28.6699C1.33105 28.196 1.49186 27.7982 1.81348 27.4766C2.15202 27.138 2.55827 26.9688 3.03223 26.9688H17.8096C18.2835 26.9688 18.6898 27.1296 19.0283 27.4512C19.3499 27.7897 19.5107 28.196 19.5107 28.6699C19.5107 29.1439 19.3415 29.5501 19.0029 29.8887C18.6813 30.2103 18.2835 30.3711 17.8096 30.3711H12.1475V40.6543C12.0459 41.6699 11.4873 42.2201 10.4717 42.3047C9.99772 42.3047 9.58301 42.1523 9.22754 41.8477C8.889 41.526 8.71973 41.1283 8.71973 40.6543V30.3711H3.03223C2.55827 30.3711 2.16048 30.2018 1.83887 29.8633C1.50033 29.5417 1.33105 29.1439 1.33105 28.6699ZM25.6045 40.6543C25.5029 41.6699 24.9443 42.2201 23.9287 42.3047C23.4548 42.3047 23.04 42.1523 22.6846 41.8477C22.346 41.526 22.1768 41.1283 22.1768 40.6543V28.6191C22.1937 28.1452 22.3714 27.7559 22.71 27.4512C23.0485 27.1296 23.4548 26.9688 23.9287 26.9688H25.1729H28.2959H34.5674C34.6689 26.9688 34.7705 26.9772 34.8721 26.9941H35.0244C36.2093 27.028 37.1826 27.2988 37.9443 27.8066C38.7061 28.3145 39.2562 28.8984 39.5947 29.5586C39.9333 30.2018 40.1025 30.8535 40.1025 31.5137C40.1025 32.1908 39.9333 32.8594 39.5947 33.5195C39.2731 34.1628 38.723 34.7383 37.9443 35.2461C37.1826 35.7539 36.2093 36.0247 35.0244 36.0586H30.5557C30.6911 36.9049 30.9704 37.5312 31.3936 37.9375C31.7998 38.3438 32.3161 38.5469 32.9424 38.5469H38.4268C38.9007 38.5638 39.29 38.7415 39.5947 39.0801C39.9163 39.4186 40.0771 39.8249 40.0771 40.2988C40.0602 40.7559 39.891 41.1452 39.5693 41.4668C39.2646 41.7715 38.8838 41.9323 38.4268 41.9492H32.4854C31.2327 41.9661 30.0986 41.4753 29.083 40.4766C28.0674 39.4779 27.4495 38.293 27.2295 36.9219C26.9248 35.3984 26.7725 34.5436 26.7725 34.3574C26.7725 33.8835 26.9333 33.4857 27.2549 33.1641C27.5934 32.8255 27.9997 32.6562 28.4736 32.6562H35.1768C35.4984 32.6393 35.7607 32.5716 35.9639 32.4531C36.1839 32.3177 36.3447 32.1738 36.4463 32.0215C36.5479 31.8522 36.5986 31.6829 36.5986 31.5137C36.5986 31.3444 36.5479 31.1836 36.4463 31.0312C36.3447 30.862 36.1839 30.7181 35.9639 30.5996C35.7607 30.4642 35.4984 30.388 35.1768 30.3711H28.2959H26.2646C25.8245 30.388 25.6045 30.6081 25.6045 31.0312V40.6543ZM48.5576 38.0137C48.5576 37.5397 48.7184 37.1419 49.04 36.8203C49.3786 36.4818 49.7848 36.3125 50.2588 36.3125H54.1436L53.4834 34.4336C53.2126 33.7396 52.9417 33.0879 52.6709 32.4785C52.417 31.8522 52.1208 31.2852 51.7822 30.7773C51.4775 30.2695 51.1305 29.9987 50.7412 29.9648C50.335 29.9987 49.971 30.2695 49.6494 30.7773C49.3278 31.2852 49.0316 31.8522 48.7607 32.4785C48.5068 33.0879 48.2445 33.7396 47.9736 34.4336L45.5615 41.0352C45.3923 41.3906 45.1722 41.6868 44.9014 41.9238C44.6475 42.1439 44.2581 42.2539 43.7334 42.2539C43.2425 42.2539 42.8363 42.0846 42.5146 41.7461C42.21 41.4076 42.0745 41.0013 42.1084 40.5273C42.1253 40.3073 42.1761 40.1042 42.2607 39.918L45.0537 32.707C45.8324 30.8112 46.611 29.2793 47.3896 28.1113C48.1514 26.9603 49.2686 26.3763 50.7412 26.3594C52.1969 26.3763 53.3057 26.9603 54.0674 28.1113C54.846 29.2454 55.6247 30.7773 56.4033 32.707L59.1963 39.918C59.2809 40.1042 59.3317 40.3073 59.3486 40.5273C59.3825 41.0013 59.2386 41.4076 58.917 41.7461C58.6123 42.0846 58.2145 42.2539 57.7236 42.2539C57.165 42.2539 56.7503 42.1439 56.4795 41.9238C56.2256 41.6868 56.014 41.3906 55.8447 41.0352L55.3623 39.7148H50.2588C49.7848 39.7148 49.387 39.5456 49.0654 39.207C48.7269 38.8854 48.5576 38.4876 48.5576 38.0137ZM66.7373 40.6035C65.9587 39.4355 65.18 37.9036 64.4014 36.0078L61.6084 28.7969C61.5238 28.6107 61.473 28.4076 61.4561 28.1875C61.4222 27.7135 61.5576 27.3073 61.8623 26.9688C62.1839 26.6302 62.5902 26.4609 63.0811 26.4609C63.6058 26.4609 63.9951 26.5794 64.249 26.8164C64.5199 27.0365 64.7399 27.3242 64.9092 27.6797L67.3213 34.2812C67.5921 34.9753 67.8545 35.6354 68.1084 36.2617C68.3792 36.8711 68.6755 37.4297 68.9971 37.9375C69.3187 38.4453 69.6826 38.7161 70.0889 38.75C70.4782 38.7161 70.8252 38.4453 71.1299 37.9375C71.4684 37.4297 71.7646 36.8711 72.0186 36.2617C72.2894 35.6354 72.5602 34.9753 72.8311 34.2812L75.1924 27.6797C75.3617 27.3242 75.5732 27.0365 75.8271 26.8164C76.098 26.5794 76.5127 26.4609 77.0713 26.4609C77.5622 26.4609 77.96 26.6302 78.2646 26.9688C78.5863 27.3073 78.7301 27.7135 78.6963 28.1875C78.6794 28.4076 78.6286 28.6107 78.5439 28.7969L75.751 36.0078C74.9723 37.9375 74.1937 39.4779 73.415 40.6289C72.6533 41.763 71.5446 42.3385 70.0889 42.3555C68.6162 42.3385 67.499 41.7546 66.7373 40.6035ZM86.0342 26.9688H87.2021H95.835C96.3089 26.9857 96.6982 27.1634 97.0029 27.502C97.3245 27.8405 97.4854 28.2467 97.4854 28.7207C97.4007 29.7363 96.8506 30.2865 95.835 30.3711H86.8975C86.2542 30.4049 85.721 30.6504 85.2979 31.1074C84.8747 31.5645 84.5615 32.0892 84.3584 32.6816C84.1722 33.2572 84.0791 33.8496 84.0791 34.459C84.0791 35.0684 84.1722 35.6693 84.3584 36.2617C84.5615 36.8372 84.8747 37.3535 85.2979 37.8105C85.721 38.2676 86.2542 38.513 86.8975 38.5469H95.835C96.3089 38.5638 96.6982 38.7415 97.0029 39.0801C97.3245 39.4186 97.4854 39.8249 97.4854 40.2988C97.4684 40.7559 97.2992 41.1452 96.9775 41.4668C96.6729 41.7715 96.292 41.9323 95.835 41.9492H86.5166H86.0342C84.8493 41.8815 83.8675 41.4329 83.0889 40.6035C82.3271 39.7572 81.777 38.8008 81.4385 37.7344C81.1169 36.668 80.9561 35.5762 80.9561 34.459C80.9561 33.3418 81.1253 32.25 81.4639 31.1836C81.8024 30.1172 82.3525 29.1693 83.1143 28.3398C83.876 27.4935 84.8493 27.0365 86.0342 26.9688ZM97.4346 34.3574C97.4346 34.8314 97.2653 35.2292 96.9268 35.5508C96.6051 35.8893 96.2074 36.0586 95.7334 36.0586H88.0654C87.5915 36.0586 87.1852 35.8978 86.8467 35.5762C86.5251 35.2376 86.3643 34.8314 86.3643 34.3574C86.3643 33.8835 86.5251 33.4772 86.8467 33.1387C87.1852 32.8171 87.5915 32.6562 88.0654 32.6562H95.7334C96.2074 32.6562 96.6051 32.8255 96.9268 33.1641C97.2653 33.4857 97.4346 33.8835 97.4346 34.3574ZM101.726 26.5625C102.2 26.5625 102.606 26.7233 102.944 27.0449C103.283 27.3496 103.461 27.7389 103.478 28.2129V34.332C103.461 35.026 103.503 35.6693 103.604 36.2617C103.723 36.8372 103.994 37.3535 104.417 37.8105C104.84 38.2676 105.373 38.513 106.017 38.5469H114.142C114.616 38.5638 115.005 38.7415 115.31 39.0801C115.631 39.4186 115.792 39.8249 115.792 40.2988C115.775 40.7559 115.606 41.1452 115.284 41.4668C114.979 41.7715 114.599 41.9323 114.142 41.9492H105.153C103.968 41.8815 102.987 41.4837 102.208 40.7559C101.446 40.0111 100.896 39.1055 100.558 38.0391C100.236 36.9727 100.067 35.8385 100.05 34.6367V28.2129C100.067 27.7559 100.236 27.375 100.558 27.0703C100.879 26.7487 101.269 26.5794 101.726 26.5625ZM135.927 26.9688H137.095H145.728C146.201 26.9857 146.591 27.1634 146.896 27.502C147.217 27.8405 147.378 28.2467 147.378 28.7207C147.293 29.7363 146.743 30.2865 145.728 30.3711H136.79C136.147 30.4049 135.614 30.6504 135.19 31.1074C134.767 31.5645 134.454 32.0892 134.251 32.6816C134.065 33.2572 133.972 33.8496 133.972 34.459C133.972 35.0684 134.065 35.6693 134.251 36.2617C134.454 36.8372 134.767 37.3535 135.19 37.8105C135.614 38.2676 136.147 38.513 136.79 38.5469H145.728C146.201 38.5638 146.591 38.7415 146.896 39.0801C147.217 39.4186 147.378 39.8249 147.378 40.2988C147.361 40.7559 147.192 41.1452 146.87 41.4668C146.565 41.7715 146.185 41.9323 145.728 41.9492H136.409H135.927C134.742 41.8815 133.76 41.4329 132.981 40.6035C132.22 39.7572 131.67 38.8008 131.331 37.7344C131.009 36.668 130.849 35.5762 130.849 34.459C130.849 33.3418 131.018 32.25 131.356 31.1836C131.695 30.1172 132.245 29.1693 133.007 28.3398C133.769 27.4935 134.742 27.0365 135.927 26.9688ZM147.327 34.3574C147.327 34.8314 147.158 35.2292 146.819 35.5508C146.498 35.8893 146.1 36.0586 145.626 36.0586H137.958C137.484 36.0586 137.078 35.8978 136.739 35.5762C136.418 35.2376 136.257 34.8314 136.257 34.3574C136.257 33.8835 136.418 33.4772 136.739 33.1387C137.078 32.8171 137.484 32.6562 137.958 32.6562H145.626C146.1 32.6562 146.498 32.8255 146.819 33.1641C147.158 33.4857 147.327 33.8835 147.327 34.3574ZM156.95 34.1035C156.493 33.2402 155.918 32.4193 155.224 31.6406C154.53 30.862 153.861 30.4388 153.218 30.3711H151.085C150.611 30.3711 150.213 30.2018 149.892 29.8633C149.553 29.5417 149.384 29.1439 149.384 28.6699C149.384 28.196 149.545 27.7982 149.866 27.4766C150.205 27.138 150.611 26.9688 151.085 26.9688H153.218V26.9941H153.472C154.69 27.0618 155.951 27.7474 157.255 29.0508C157.898 29.7109 158.491 30.4557 159.032 31.2852C159.574 30.4557 160.175 29.7109 160.835 29.0508C162.121 27.7474 163.374 27.0618 164.593 26.9941H164.847V26.9688H166.979C167.453 26.9688 167.851 27.138 168.173 27.4766C168.511 27.7982 168.681 28.196 168.681 28.6699C168.681 29.1439 168.511 29.5417 168.173 29.8633C167.851 30.2018 167.453 30.3711 166.979 30.3711H164.847C164.203 30.4388 163.535 30.862 162.841 31.6406C162.147 32.4193 161.571 33.2402 161.114 34.1035C161.013 34.2897 160.911 34.4674 160.81 34.6367C160.843 34.6875 160.877 34.7383 160.911 34.7891C161.368 35.6693 161.944 36.4987 162.638 37.2773C163.332 38.056 164 38.4707 164.644 38.5215H166.776C167.25 38.5215 167.648 38.6908 167.97 39.0293C168.308 39.3509 168.478 39.7487 168.478 40.2227C168.478 40.6966 168.308 41.1029 167.97 41.4414C167.648 41.763 167.25 41.9238 166.776 41.9238H164.39C163.171 41.8561 161.918 41.179 160.632 39.8926C160.056 39.3001 159.523 38.6569 159.032 37.9629C158.541 38.6569 158.008 39.3001 157.433 39.8926C156.146 41.179 154.894 41.8561 153.675 41.9238H151.288C150.814 41.9238 150.408 41.763 150.069 41.4414C149.748 41.1029 149.587 40.6966 149.587 40.2227C149.587 39.7487 149.756 39.3509 150.095 39.0293C150.416 38.6908 150.814 38.5215 151.288 38.5215H153.421C154.064 38.4707 154.733 38.056 155.427 37.2773C156.121 36.4987 156.696 35.6693 157.153 34.7891C157.187 34.7383 157.221 34.6875 157.255 34.6367C157.153 34.4674 157.052 34.2897 156.95 34.1035ZM174.724 40.6035C174.622 41.6191 174.063 42.1693 173.048 42.2539C172.574 42.2539 172.159 42.1016 171.804 41.7969C171.465 41.4753 171.296 41.0775 171.296 40.6035V28.6191C171.313 28.1452 171.491 27.7559 171.829 27.4512C172.168 27.1296 172.574 26.9688 173.048 26.9688H183.712C185.201 27.0195 186.327 27.3496 187.089 27.959C187.851 28.5514 188.401 29.2285 188.739 29.9902C189.078 30.752 189.247 31.5221 189.247 32.3008C189.247 33.1133 189.078 33.9004 188.739 34.6621C188.418 35.4238 187.868 36.1094 187.089 36.7188C186.327 37.3112 185.354 37.599 184.169 37.582H177.771C177.297 37.582 176.899 37.4128 176.577 37.0742C176.239 36.7526 176.069 36.3548 176.069 35.8809C176.069 35.4069 176.23 35.0091 176.552 34.6875C176.89 34.349 177.297 34.1797 177.771 34.1797H184.321C184.643 34.1797 184.905 34.0781 185.108 33.875C185.328 33.6549 185.489 33.4095 185.591 33.1387C185.692 32.8509 185.743 32.5632 185.743 32.2754C185.743 32.0046 185.692 31.7337 185.591 31.4629C185.489 31.1751 185.328 30.9297 185.108 30.7266C184.905 30.5065 184.643 30.388 184.321 30.3711H175.384C174.944 30.388 174.724 30.6081 174.724 31.0312V40.6035ZM196.661 26.9688H197.829H206.462C206.936 26.9857 207.325 27.1634 207.63 27.502C207.951 27.8405 208.112 28.2467 208.112 28.7207C208.028 29.7363 207.478 30.2865 206.462 30.3711H197.524C196.881 30.4049 196.348 30.6504 195.925 31.1074C195.502 31.5645 195.188 32.0892 194.985 32.6816C194.799 33.2572 194.706 33.8496 194.706 34.459C194.706 35.0684 194.799 35.6693 194.985 36.2617C195.188 36.8372 195.502 37.3535 195.925 37.8105C196.348 38.2676 196.881 38.513 197.524 38.5469H206.462C206.936 38.5638 207.325 38.7415 207.63 39.0801C207.951 39.4186 208.112 39.8249 208.112 40.2988C208.095 40.7559 207.926 41.1452 207.604 41.4668C207.3 41.7715 206.919 41.9323 206.462 41.9492H197.144H196.661C195.476 41.8815 194.494 41.4329 193.716 40.6035C192.954 39.7572 192.404 38.8008 192.065 37.7344C191.744 36.668 191.583 35.5762 191.583 34.459C191.583 33.3418 191.752 32.25 192.091 31.1836C192.429 30.1172 192.979 29.1693 193.741 28.3398C194.503 27.4935 195.476 27.0365 196.661 26.9688ZM208.062 34.3574C208.062 34.8314 207.892 35.2292 207.554 35.5508C207.232 35.8893 206.834 36.0586 206.36 36.0586H198.692C198.218 36.0586 197.812 35.8978 197.474 35.5762C197.152 35.2376 196.991 34.8314 196.991 34.3574C196.991 33.8835 197.152 33.4772 197.474 33.1387C197.812 32.8171 198.218 32.6562 198.692 32.6562H206.36C206.834 32.6562 207.232 32.8255 207.554 33.1641C207.892 33.4857 208.062 33.8835 208.062 34.3574ZM214.079 40.6543C213.978 41.6699 213.419 42.2201 212.403 42.3047C211.929 42.3047 211.515 42.1523 211.159 41.8477C210.821 41.526 210.651 41.1283 210.651 40.6543V28.6191C210.668 28.1452 210.846 27.7559 211.185 27.4512C211.523 27.1296 211.929 26.9688 212.403 26.9688H213.647H216.771H223.042C223.144 26.9688 223.245 26.9772 223.347 26.9941H223.499C224.684 27.028 225.657 27.2988 226.419 27.8066C227.181 28.3145 227.731 28.8984 228.069 29.5586C228.408 30.2018 228.577 30.8535 228.577 31.5137C228.577 32.1908 228.408 32.8594 228.069 33.5195C227.748 34.1628 227.198 34.7383 226.419 35.2461C225.657 35.7539 224.684 36.0247 223.499 36.0586H219.03C219.166 36.9049 219.445 37.5312 219.868 37.9375C220.274 38.3438 220.791 38.5469 221.417 38.5469H226.901C227.375 38.5638 227.765 38.7415 228.069 39.0801C228.391 39.4186 228.552 39.8249 228.552 40.2988C228.535 40.7559 228.366 41.1452 228.044 41.4668C227.739 41.7715 227.358 41.9323 226.901 41.9492H220.96C219.707 41.9661 218.573 41.4753 217.558 40.4766C216.542 39.4779 215.924 38.293 215.704 36.9219C215.399 35.3984 215.247 34.5436 215.247 34.3574C215.247 33.8835 215.408 33.4857 215.729 33.1641C216.068 32.8255 216.474 32.6562 216.948 32.6562H223.651C223.973 32.6393 224.235 32.5716 224.438 32.4531C224.659 32.3177 224.819 32.1738 224.921 32.0215C225.022 31.8522 225.073 31.6829 225.073 31.5137C225.073 31.3444 225.022 31.1836 224.921 31.0312C224.819 30.862 224.659 30.7181 224.438 30.5996C224.235 30.4642 223.973 30.388 223.651 30.3711H216.771H214.739C214.299 30.388 214.079 30.6081 214.079 31.0312V40.6543ZM230.837 28.6699C230.837 28.196 230.998 27.7982 231.319 27.4766C231.658 27.138 232.064 26.9688 232.538 26.9688H247.315C247.789 26.9688 248.196 27.1296 248.534 27.4512C248.856 27.7897 249.017 28.196 249.017 28.6699C249.017 29.1439 248.847 29.5501 248.509 29.8887C248.187 30.2103 247.789 30.3711 247.315 30.3711H241.653V40.6543C241.552 41.6699 240.993 42.2201 239.978 42.3047C239.504 42.3047 239.089 42.1523 238.733 41.8477C238.395 41.526 238.226 41.1283 238.226 40.6543V30.3711H232.538C232.064 30.3711 231.666 30.2018 231.345 29.8633C231.006 29.5417 230.837 29.1439 230.837 28.6699ZM268.11 28.6699C268.11 29.1439 267.941 29.5417 267.603 29.8633C267.281 30.2018 266.883 30.3711 266.409 30.3711H256.253C255.931 30.388 255.66 30.4642 255.44 30.5996C255.237 30.7181 255.085 30.862 254.983 31.0312C254.882 31.1836 254.831 31.3444 254.831 31.5137C254.831 31.6829 254.882 31.8522 254.983 32.0215C255.085 32.1738 255.237 32.3177 255.44 32.4531C255.66 32.5716 255.931 32.6393 256.253 32.6562H263.464C264.649 32.6901 265.622 32.9694 266.384 33.4941C267.162 34.002 267.713 34.5944 268.034 35.2715C268.373 35.9316 268.542 36.6087 268.542 37.3027C268.542 37.9798 268.373 38.6569 268.034 39.334C267.696 39.9941 267.146 40.5866 266.384 41.1113C265.622 41.6191 264.649 41.873 263.464 41.873H263.312C263.21 41.89 263.108 41.8984 263.007 41.8984H253.409C252.935 41.8984 252.529 41.7376 252.19 41.416C251.869 41.0775 251.708 40.6712 251.708 40.1973C251.708 39.7233 251.877 39.3255 252.216 39.0039C252.537 38.6654 252.935 38.4961 253.409 38.4961H263.616C263.938 38.513 264.2 38.4538 264.403 38.3184C264.623 38.1829 264.784 38.0306 264.886 37.8613C264.987 37.6751 265.038 37.4889 265.038 37.3027C265.038 37.1842 264.987 37.0234 264.886 36.8203C264.784 36.6003 264.623 36.4225 264.403 36.2871C264.2 36.1517 263.938 36.0755 263.616 36.0586H256.405C255.22 36.0247 254.239 35.7539 253.46 35.2461C252.698 34.7383 252.148 34.1628 251.81 33.5195C251.488 32.8594 251.327 32.1908 251.327 31.5137C251.327 30.8535 251.496 30.2018 251.835 29.5586C252.174 28.8984 252.724 28.3145 253.485 27.8066C254.247 27.2988 255.22 27.028 256.405 26.9941H256.558C256.659 26.9772 256.761 26.9688 256.862 26.9688H266.409C266.883 26.9688 267.281 27.138 267.603 27.4766C267.941 27.7982 268.11 28.196 268.11 28.6699Z"
          fill={fill}
        />
        <path
          d="M4.93285 17.112L2.48285 17.028C2.05352 15.4413 1.65685 13.7473 1.29285 11.946C0.938185 10.1447 0.634852 8.32933 0.382852 6.5C1.41885 6.31333 2.40352 6.22 3.33685 6.22C3.41152 7.004 3.49085 7.79733 3.57485 8.6C3.66819 9.40267 3.76152 10.1773 3.85485 10.924C3.94818 11.6707 4.04152 12.366 4.13485 13.01C4.22819 13.6447 4.31685 14.1953 4.40085 14.662C4.81152 12.842 5.14285 11.2227 5.39485 9.804C5.65619 8.376 5.81952 7.27467 5.88485 6.5C6.27685 6.45333 6.66419 6.42067 7.04685 6.402C7.42952 6.374 7.77952 6.36 8.09685 6.36C8.17152 6.836 8.27885 7.424 8.41885 8.124C8.55885 8.824 8.75019 9.70133 8.99285 10.756C9.23552 11.8107 9.54352 13.1127 9.91685 14.662C10.0662 13.906 10.2015 13.1313 10.3229 12.338C10.4535 11.5353 10.5702 10.756 10.6729 10C10.7755 9.244 10.8595 8.544 10.9249 7.9C10.9902 7.256 11.0322 6.71467 11.0509 6.276L12.5629 6.388C12.3949 7.592 12.1989 8.81467 11.9749 10.056C11.7509 11.288 11.5082 12.4967 11.2469 13.682C10.9949 14.8673 10.7335 15.9827 10.4629 17.028L8.41885 17.112C8.12019 16.02 7.83085 14.9187 7.55085 13.808C7.28019 12.6973 7.02352 11.6427 6.78085 10.644C6.52885 11.6427 6.24885 12.6833 5.94085 13.766C5.63285 14.8393 5.29685 15.9547 4.93285 17.112ZM20.9329 17.07C20.6062 17.042 20.0835 17.0187 19.3649 17C18.6555 16.972 17.8015 16.9533 16.8029 16.944C15.8135 16.9347 14.7355 16.93 13.5689 16.93C13.5502 16.6687 13.5269 16.272 13.4989 15.74C13.4802 15.1987 13.4569 14.5827 13.4289 13.892C13.4009 13.2013 13.3729 12.4827 13.3449 11.736C13.3169 10.9893 13.2935 10.2707 13.2749 9.58C13.2562 8.88 13.2375 8.25933 13.2189 7.718C13.2095 7.17667 13.2049 6.77067 13.2049 6.5C13.6155 6.5 14.0869 6.5 14.6189 6.5C15.1602 6.49067 15.7249 6.48133 16.3129 6.472C16.9009 6.46267 17.4842 6.45333 18.0629 6.444C18.6415 6.42533 19.1782 6.41133 19.6729 6.402C20.1769 6.38333 20.6016 6.36933 20.9469 6.36L21.0029 7.858L16.0049 7.69C16.0049 8.24067 16.0049 8.80067 16.0049 9.37C16.0049 9.93 16.0095 10.4807 16.0189 11.022L20.7229 10.868L20.6669 12.408L16.0329 12.212C16.0422 12.8747 16.0515 13.5047 16.0609 14.102C16.0702 14.6993 16.0842 15.2407 16.1029 15.726L20.9889 15.558L20.9329 17.07ZM32.3164 17.07C31.3271 17.07 30.4544 16.8553 29.6984 16.426C28.9517 15.9967 28.3637 15.3993 27.9344 14.634C27.5144 13.8687 27.3044 12.982 27.3044 11.974C27.3044 11.1713 27.4397 10.4247 27.7104 9.734C27.9811 9.04333 28.3544 8.44133 28.8304 7.928C29.3157 7.41467 29.8851 7.01333 30.5384 6.724C31.1917 6.43467 31.8964 6.29 32.6524 6.29C33.4457 6.29 34.1877 6.44867 34.8784 6.766C35.5784 7.074 36.1337 7.494 36.5444 8.026C35.8631 8.81933 35.2284 9.37467 34.6404 9.692C33.9217 8.28267 33.0584 7.578 32.0504 7.578C31.3691 7.578 30.8184 7.86267 30.3984 8.432C29.9877 9.00133 29.7824 9.76667 29.7824 10.728C29.7824 11.3533 29.8664 11.9693 30.0344 12.576C30.2117 13.1733 30.4451 13.7147 30.7344 14.2C31.0331 14.6853 31.3644 15.0727 31.7284 15.362C32.1017 15.642 32.4797 15.782 32.8624 15.782C33.1424 15.782 33.4317 15.712 33.7304 15.572C34.0291 15.4227 34.3091 15.222 34.5704 14.97C34.8411 14.7087 35.0651 14.4193 35.2424 14.102L36.5444 15.124C35.4057 16.4213 33.9964 17.07 32.3164 17.07ZM40.7364 14.816C40.4938 14.816 40.2418 14.816 39.9804 14.816C39.7284 14.8067 39.4671 14.7927 39.1964 14.774C38.9911 15.502 38.7858 16.2627 38.5804 17.056L36.9004 16.944C37.4231 15.18 38.0064 13.402 38.6504 11.61C39.2944 9.80867 39.9804 8.05867 40.7084 6.36C41.0538 6.32267 41.4364 6.29 41.8564 6.262C42.2858 6.234 42.7244 6.22 43.1724 6.22C43.7418 7.60133 44.3484 9.19733 44.9924 11.008C45.6364 12.8187 46.2991 14.7693 46.9804 16.86C46.4391 16.9533 45.9258 17.0233 45.4404 17.07C44.9644 17.1167 44.4791 17.14 43.9844 17.14C43.7884 16.356 43.5691 15.53 43.3264 14.662C42.4958 14.7647 41.6324 14.816 40.7364 14.816ZM41.2824 7.858C41.0864 8.39 40.8391 9.12733 40.5404 10.07C40.2511 11.0127 39.9291 12.1187 39.5744 13.388C39.9478 13.4347 40.3304 13.4673 40.7224 13.486C41.1238 13.5047 41.5531 13.514 42.0104 13.514C42.1784 13.514 42.3464 13.514 42.5144 13.514C42.6918 13.5047 42.8551 13.5 43.0044 13.5C42.7991 12.7533 42.5891 12.03 42.3744 11.33C42.1691 10.6207 41.9731 9.972 41.7864 9.384C41.5998 8.78667 41.4318 8.278 41.2824 7.858ZM47.8904 16.958C47.8904 16.538 47.8951 16.0293 47.9044 15.432C47.9138 14.8253 47.9231 14.1767 47.9324 13.486C47.9511 12.786 47.9698 12.0813 47.9884 11.372C48.0071 10.6533 48.0258 9.972 48.0444 9.328C48.0724 8.67467 48.0958 8.10067 48.1144 7.606C48.1331 7.102 48.1518 6.71933 48.1704 6.458C48.4131 6.43933 48.7538 6.42533 49.1924 6.416C49.6404 6.40667 50.1958 6.402 50.8584 6.402C51.6238 7.53133 52.4218 8.73533 53.2524 10.014C54.0924 11.2833 54.9464 12.6413 55.8144 14.088L55.5064 6.388C55.7491 6.388 56.0104 6.39733 56.2904 6.416C56.5798 6.42533 56.8598 6.43933 57.1304 6.458C57.1304 7.242 57.1258 8.082 57.1164 8.978C57.1071 9.86467 57.0978 10.7467 57.0884 11.624C57.0791 12.5013 57.0651 13.318 57.0464 14.074C57.0278 14.8207 57.0091 15.4507 56.9904 15.964C56.9811 16.4773 56.9671 16.8133 56.9484 16.972C56.7524 16.9813 56.4864 16.9907 56.1504 17C55.8238 17.0093 55.4924 17.014 55.1564 17.014C54.8204 17.0233 54.5451 17.028 54.3304 17.028C53.5931 15.824 52.7718 14.5547 51.8664 13.22C50.9704 11.8853 50.0651 10.56 49.1504 9.244L49.5144 17.042C48.9918 17.042 48.4504 17.014 47.8904 16.958Z"
          fill={fill}
        />
      </svg>
    </>
  );
};
