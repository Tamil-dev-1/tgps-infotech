import React from 'react';
import BlockchainLogo from '../../assets/images/blockchain/blockchainLogo.png'

const BlockchainLogos = () => {
  // Data array to keep the code clean
  const platforms = [
    { name: "Ethereum", logo: BlockchainLogo },
    { name: "Solana", logo: BlockchainLogo },
    { name: "Polygon", logo: BlockchainLogo },
    { name: "Binance", logo: BlockchainLogo },
    { name: "Cardano", logo: BlockchainLogo },
    { name: "Avalanche", logo: BlockchainLogo },
    { name: "sKALE", logo: BlockchainLogo },
    { name: "Tron", logo: BlockchainLogo },
    { name: "polkadot", logo: BlockchainLogo },
    { name: "cosmos", logo: BlockchainLogo },
    { name: "corda", logo: BlockchainLogo },
    { name: "Near", logo: BlockchainLogo },
    { name: "Harmony", logo: BlockchainLogo },
    { name: "Tezos", logo: BlockchainLogo },
    { name: "Zetachain", logo: BlockchainLogo },
    { name: "Hyperledger Fabric", logo: BlockchainLogo },
    { name: "ICP", logo: BlockchainLogo },
    { name: "ton", logo: BlockchainLogo },
    { name: "klaytn", logo: BlockchainLogo },
    { name: "Telos", logo: BlockchainLogo },
    { name: "Ripple", logo: BlockchainLogo },
    { name: "Boba Network", logo: BlockchainLogo },
    { name: "Pirichain", logo: BlockchainLogo },
  ];

  return (
    <div className="container py-5 text-center" style={{backgroundColor:"#0B0B0B"}}>
      <h2 className="fw-bold mb-3 text-white">Blockchain Platforms We Develop On</h2>
      <p className="mb-5 mx-auto" style={{ maxWidth: '700px', color:'#6c757d' }}>
        As a leading blockchain software development company, we leverage different blockchain networks to provide you with the best solutions aligned with your needs.
      </p>

      {/* Flex Container */}
      <div className="logo-flex-container">
        {platforms.map((item, index) => (
          <div key={index} className="logo-flex-item d-flex flex-column align-items-center mb-4">
            <div className="logo-wrapper mb-2 d-flex align-items-center justify-content-center" style={{ height: '80px' }}>
              <img 
                src={item.logo} 
                alt={item.name} 
                className="img-fluid" 
                style={{ maxHeight: '60px', width: 'auto' }}
              />
            </div>
            <span className="text-secondary small fw-medium">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Decorative lines (Optional, to match your image style) */}
      <style dangerouslySetInnerHTML={{ __html: `
        .logo-flex-container {
          display:flex;
          flex-wrap:wrap;
          justify-content:center;
          gap:30px;
        }

        .logo-flex-item{
          flex:0 0 calc(16.66% - 30px);
        }

        @media (max-width:992px){
          .logo-flex-item{
            flex:0 0 calc(25% - 30px);
          }
        }

        @media (max-width:768px){
          .logo-flex-item{
            flex:0 0 calc(33.33% - 30px);
          }
        }

        @media (max-width:576px){
          .logo-flex-item{
            flex:0 0 calc(50% - 30px);
          }
        }
      `}} />
    </div>
  );
};

export default BlockchainLogos;